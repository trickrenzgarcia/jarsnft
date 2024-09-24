import { Hono } from "hono";

export const mint = new Hono()

mint.get('/', async (c) => {
  return c.json({ message: 'mint' })
})
