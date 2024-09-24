import { Hono } from "hono";
import { z } from "zod";
import { db } from "@/../drizzle/db";
import { eq } from "drizzle-orm";
import { users } from "@/../drizzle/migrations/schema";

export const address = new Hono()

const schema = z.string().min(1)

address.get('/:address', async (c) => {
  const params = schema.safeParse(c.req.param('address'))

  if(!params.success) {
    return c.json(params.error.errors, 400)
  }

  const user = await db.query.users.findFirst({
    where: eq(users.address, params.data)
  })

  if(!user) {
    return c.json({ message: 'User not found' }, 404)
  }
  return c.json({ success: true, user }, 200)
})