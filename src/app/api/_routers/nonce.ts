import { Hono } from "hono";
import { db } from "@/../drizzle/db";
import { nonce as nonceSchema } from "@/schema/zod";
import { nonce as nonceTable } from "@/../drizzle/migrations/schema"
import { eq } from "drizzle-orm";

export const nonce = new Hono()

nonce.post('/validate', async (c) => {
  try {
    const body = await c.req.json()
    const nonce = nonceSchema.safeParse(body)

    if(!nonce.success) {
      return c.json(nonce.error.errors, 400)
    }

    const data = await db.query.nonce.findFirst({
      where: eq(nonceTable.nonce, nonce.data.nonce)
    })

    if(data) {
      return c.json(true, 409)
    }

    return c.json(false, 200)
  } catch (error) {
    return c.json({ message: 'Invalid request' }, 400)
  }
})

nonce.post('/create', async (c) => {
  try {
    const body = await c.req.json()
    const nonce = nonceSchema.safeParse(body)

    if(!nonce.success) {
      return c.json(nonce.error.errors, 400)
    }

    await db.insert(nonceTable).values({
      nonce: nonce.data.nonce
    })

    const data = await db.query.nonce.findFirst({
      where: eq(nonceTable.nonce, nonce.data.nonce)
    })

    if(!data) {
      return c.json({ message: 'Failed to create nonce' }, 500)
    }

    return c.json(data, 200)
  } catch (error) {
    return c.json({ message: 'Invalid request' }, 400)
  }
})