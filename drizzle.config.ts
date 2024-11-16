import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./drizzle/migrations/schema.ts",
  out: "./drizzle/migrations",
  dialect: "mysql",
  dbCredentials: {
    url: "mysql://u943563710_root:@Jarsnft2024@auth-db1237.hstgr.io:3306/u943563710_jarsnft",
  },
  verbose: true,
  strict: true,
});
