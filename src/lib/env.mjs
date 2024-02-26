import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_LOCAL_URL: z.string().min(1),
    NEXT_PUBLIC_AUTH_SECRET: z.string().min(1),
    NEXT_PUBLIC_THIRDWEB_CLIENT_ID: z.string().min(1),
    NEXT_PUBLIC_THIRDWEB_API_KEY: z.string().min(1),
    NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN: z.string().min(1),
    NEXT_PUBLIC_BACKEND_URL: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_LOCAL_URL: z.string().min(1),
    NEXT_PUBLIC_AUTH_SECRET: z.string().min(1),
    NEXT_PUBLIC_THIRDWEB_CLIENT_ID: z.string().min(1),
    NEXT_PUBLIC_THIRDWEB_API_KEY: z.string().min(1),
    NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN: z.string().min(1),
    NEXT_PUBLIC_BACKEND_URL: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_LOCAL_URL: process.env.NEXT_PUBLIC_LOCAL_URL,
    NEXT_PUBLIC_AUTH_SECRET: process.env.NEXT_PUBLIC_AUTH_SECRET,
    NEXT_PUBLIC_THIRDWEB_CLIENT_ID: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
    NEXT_PUBLIC_THIRDWEB_API_KEY: process.env.NEXT_PUBLIC_THIRDWEB_API_KEY,
    NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN:
      process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN,
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
});
