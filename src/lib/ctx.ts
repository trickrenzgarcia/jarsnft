import { env } from "./env.mjs";

export const BASE_URL: string =
  process.env.NODE_ENV === "development"
    ? env.NEXT_PUBLIC_BACKEND_URL
    : env.NEXT_PUBLIC_BACKEND_URL;

export const authToken = process.env.JWT_AUTH_TOKEN as string;
