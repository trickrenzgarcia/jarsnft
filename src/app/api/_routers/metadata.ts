import { Hono } from "hono";
import { db } from "@/../drizzle/db";
import { contractAddress } from "@/schema/zod";
import alchemy from "@/lib/alchemy";

export const metadata = new Hono()

const ALCHEMY_BASE_URL = process.env.SEPOLIA_ALCHEMY_BASE_URL
const ALCHEMY_API_KEY = process.env.SEPOLIA_ALCHEMY_API_KEY
const ALCHEMY_WEBSOCKET = process.env.SEPOLIA_ALCHEMY_WEBSOCKET

metadata.get('/all', async (c) => {
  const data = await db.query.nftCollections.findMany()

  return c.json(data, 200)
})

metadata.get('/:contractAddress', async (c) => {
  const schema = contractAddress.safeParse(c.req.param('contractAddress'))

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  try {
    const response = await fetch(`${ALCHEMY_BASE_URL}${ALCHEMY_API_KEY}/getContractMetadata?contractAddress=${schema.data}`)
    const metadata = await response.json()

    return c.json(metadata, 200)
  } catch(error) {
    return c.json({ message: "Error fetching Metadata!" }, 500)
  }
})

metadata.get('/:contractAddress/floor_price', async (c) => {
  const schema = contractAddress.safeParse(c.req.param('contractAddress'))

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  try {
    const floorPrice = await alchemy.nft.getFloorPrice(schema.data);

    return c.json(floorPrice, 200)
  } catch(error) {
    return c.json({ message: "Error fetching Floor Price!" }, 500)
  }
})