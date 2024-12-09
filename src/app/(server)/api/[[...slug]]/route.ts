import { RedisRateLimiter } from "@/lib/rate-limiter";
import { Ratelimit } from "@upstash/ratelimit";
import { Hono } from "hono";
import { handle } from "hono/vercel";

declare module "hono" {
  interface ContextVariableMap {
    ratelimit: Ratelimit;
  }
}

const app = new Hono().basePath("/api");

app.use(async (ctx, next) => {
  const rateLimit = RedisRateLimiter.getInstance(ctx);
  ctx.set("ratelimit", rateLimit);
  await next();
});

app.get("/test-ratelimiter", async (ctx) => {
  const rateLimit = ctx.get("ratelimit");
  const ip = ctx.req.raw.headers.get("x-forwarded-for");

  const { success } = await rateLimit.limit(ip ?? "anonymous");

  if (!success) {
    return ctx.json({ message: "Rate limit exceeded" }, 429);
  }

  return ctx.json({ message: "Hello World" });
});

export const GET = handle(app);
export const POST = handle(app);
