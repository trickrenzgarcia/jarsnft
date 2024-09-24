import { searchSchema } from "@/schema/zod";
import { Hono } from "hono";
import { db } from "@/../drizzle/db";
import { nftCollections } from "@/../drizzle/migrations/schema";
import { or, sql } from "drizzle-orm";

export const search = new Hono()

search.get('/', async (c) => {
  const query = c.req.query()
  const schema = searchSchema.safeParse(query)

  
  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }
  const searchTerm = `%${schema.data.q}%`.toLowerCase();

  const searchResults = await db.select().from(nftCollections)
    .where(
      or(
        sql`LOWER(${nftCollections.contract}) LIKE ${searchTerm}`,
        sql`LOWER(${nftCollections.name}) LIKE ${searchTerm}`,
      )
      
    ).limit(10);

  return c.json(searchResults, 200)
})