import { Ratelimit } from "@upstash/ratelimit";
import { Hono } from "hono";
import { handle } from "hono/vercel";

declare module "hono" {
  interface ContextVariableMap {
    ratelimit: Ratelimit;
  }
}

const app = new Hono().basePath("/api");

export const GET = handle(app);
export const POST = handle(app);
