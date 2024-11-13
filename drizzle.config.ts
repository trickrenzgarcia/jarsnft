import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './drizzle/migrations/schema.ts',
  out: './drizzle/migrations',
  dialect: 'mysql',
  dbCredentials: {
    url: ''
  },
  verbose: true,
  strict: true,
})