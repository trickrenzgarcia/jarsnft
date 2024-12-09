import { Ratelimit } from "@upstash/ratelimit";
import type { BlankEnv, BlankInput } from "hono/types";
import type { Context } from "hono";
import { env } from "hono/adapter";
import { Redis } from "@upstash/redis";

// Cache to store the rate limit data
const cache = new Map();

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
