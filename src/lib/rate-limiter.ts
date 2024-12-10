import { Ratelimit } from "@upstash/ratelimit";
import type { BlankEnv, BlankInput, Next } from "hono/types";
import type { Context } from "hono";
import { env } from "hono/adapter";
import { Redis } from "@upstash/redis";

// Cache to store the rate limit data
const cache = new Map();

// Middleware to set the rate limiter instance in the context
export const rateLimitMiddleware = async (
  ctx: Context<BlankEnv, never, object>,
  next: Next
) => {
  const rateLimit = RedisRateLimiter.getInstance(ctx);
  ctx.set("ratelimit", rateLimit);
  await next();
};

// Singleton class to get the rate limiter instance
export class RedisRateLimiter {
  static instance: Ratelimit;

  static getInstance(c: Context<BlankEnv, "/api/test", BlankInput>) {
    if (!this.instance) {
      const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } = env<{
        UPSTASH_REDIS_REST_URL: string;
        UPSTASH_REDIS_REST_TOKEN: string;
      }>(c);

      const redisClient = new Redis({
        url: UPSTASH_REDIS_REST_URL,
        token: UPSTASH_REDIS_REST_TOKEN,
      });

      const rateLimit = new Ratelimit({
        redis: redisClient,
        limiter: Ratelimit.slidingWindow(10, "10 s"),
        ephemeralCache: cache,
      });

      this.instance = rateLimit;
      return this.instance;
    } else {
      return this.instance;
    }
  }
}

// Example route to test the rate limiter
// app.get("/test-ratelimiter", async (ctx) => {
//   const rateLimit = ctx.get("ratelimit");
//   const ip = ctx.req.raw.headers.get("x-forwarded-for");

//   const { success } = await rateLimit.limit(ip ?? "anonymous");

//   if (!success) {
//     return ctx.json({ message: "Rate limit exceeded" }, 429);
//   }

//   return ctx.json({ message: "Hello World" });
// });
