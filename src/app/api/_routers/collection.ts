import { collectionSchema, contractAddress, ownerSchema } from "@/schema/zod";
import { Hono } from "hono";
import { db } from "@/../drizzle/db";
import { eq, sql } from "drizzle-orm";
import { nftCollections } from "@/../drizzle/migrations/schema";
import { getNFTs } from "thirdweb/extensions/erc721";
import { getContract } from "thirdweb";
import { chain, client } from "@/lib/thirdweb-sdk";
import { getCollection } from "@/lib/simplehash";

export const collection = new Hono()

collection.get('/', async (c) => {
  return c.json({ message: 'collection' })
})

collection.get('/getCollectionsByOwner', async (c) => {
  const query = c.req.query()
  const schema = ownerSchema.safeParse(query)

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  const collections = await db.query.nftCollections.findMany({
    where: eq(nftCollections.owner, schema.data.owner)
  })
  
  return c.json(collections, 200)
})

collection.get('/:contractAddress', async (c) => {
  const param = c.req.param('contractAddress')
  const schema = contractAddress.safeParse(param)

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  const simpleHash = getCollection(schema.data)

  const metadata = db.query.nftCollections.findFirst({
    where: eq(nftCollections.contract, schema.data)
  })

  const [collectionData, simpleHashData] = await Promise.all([metadata, simpleHash])

  const data = { ...collectionData, simpleHashData: simpleHashData };
  
  return c.json(data, 200)
})

collection.put('/:contractAddress/update-view-count', async (c) => {
  const param = c.req.param('contractAddress')
  const schema = contractAddress.safeParse(param)

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  await db.update(nftCollections)
  .set({ viewCount: sql`${nftCollections.viewCount} + 1` })
  .where(eq(nftCollections.contract, schema.data))

  const updated = await db.select({
    viewCount: nftCollections.viewCount
  })
  .from(nftCollections)
  .where(eq(nftCollections.contract, schema.data))
  .limit(1)

  return c.json(updated[0], 200)
})

