import alchemy from "@/lib/alchemy";
import { getNFTByTokenId, getNFTsByWallet } from "@/lib/simplehash";
import { nftSchema, ownerSchema, transactionSchema, walletAddress } from "@/schema/zod";
import { Hono } from "hono";
import { db } from "@/../drizzle/db";
import { and, eq } from "drizzle-orm";
import { nftEvents, nftViews } from "@/../drizzle/migrations/schema";
import { randomUUID } from "crypto";
import { ethers } from "ethers";

export const nfts = new Hono()

nfts.get('/getNFTsForOwner', async (c) => {
  try {
    const query = c.req.query()
    const owner = ownerSchema.safeParse(query)

    if(!owner.success) {
      return c.json(owner.error.errors, 400)
    }

    const nfts = await alchemy.nft.getNftsForOwner(owner.data.owner)
    return c.json(nfts, 200)
  } catch (error) {
    return c.json({ message: 'Invalid request' }, 400)
  }
})

nfts.get('/:contractAddress/:tokenId', async (c) => {
  const schema = nftSchema.safeParse(c.req.param())

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  const data = await getNFTByTokenId(schema.data.contractAddress, schema.data.tokenId)

  return c.json(data, 200)
})

nfts.get('/getNFTsByWallet', async (c) => {
  const schema = walletAddress.safeParse(c.req.query('walletAddress'))

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  const nfts = await getNFTsByWallet(schema.data)

  return c.json(nfts.nfts, 200)
})

nfts.get('/views', async (c) => {
  const schema = nftSchema.safeParse(c.req.query())

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  const data = await db.query.nftViews.findFirst({
    where:(fields, operators) => (
      operators.eq(fields.contract, schema.data.contractAddress) &&
      operators.eq(fields.tokenId, schema.data.tokenId)   
    ),
  })

  return c.json(data, 200)
}) 

nfts.post('/views', async (c) => {
  const schema = nftSchema.safeParse(c.req.query())

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  const data = await db.query.nftViews.findFirst({
    where: (fields, operators) => (
      operators.eq(fields.contract, schema.data.contractAddress) &&
      operators.eq(fields.tokenId, schema.data.tokenId)
    )
  })

  if(!data) {
    await db.insert(nftViews).values({
      contract: schema.data.contractAddress,
      tokenId: schema.data.tokenId,
      viewCount: 1
    })
    const newData = await db.query.nftViews.findFirst({
      where: (fields, operators) => (
        operators.eq(fields.contract, schema.data.contractAddress) &&
        operators.eq(fields.tokenId, schema.data.tokenId)
      )
    })
    return c.json(newData, 200)
  }

  await db.transaction(async (tx) => {
    await db.update(nftViews).set({
      viewCount: data.viewCount + 1
    }).where(
      and(
        eq(nftViews.id, data.id),
        eq(nftViews.contract, schema.data.contractAddress),
        eq(nftViews.tokenId, schema.data.tokenId)
      )
    )

    const updatedView = await tx.query.nftViews.findFirst({
      where: and(
        eq(nftViews.id, data.id),
        eq(nftViews.contract, schema.data.contractAddress),
        eq(nftViews.tokenId, schema.data.tokenId)
      )
    })

    return c.json(updatedView, 200)
  })
  
})

nfts.get('/tx', async (c) => {
  const schema = transactionSchema.safeParse(c.req.query())

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  const CHAIN_ID = process.env.CHAIN_ID
  const provider = new ethers.providers.InfuraProvider(11155111, {
    projectId: process.env.INFURA_API_PUBLIC_KEY,
    referrerPolicy: 'no-referrer'
  })

  try {
    const txResult = await provider.getTransaction(schema.data.transactionHash)

    if(!txResult.blockNumber) {
      return c.json({ message: 'Transaction not found' }, 404)
    }

    const block = await provider.getBlock(txResult.blockNumber)

    if(!block) {
      return c.json({ message: 'Block not found' }, 404)
    }

    const timestamp = new Date(block.timestamp * 1000)

    return c.json({ schema, timestamp }, 200)
  } catch (error) {
    console.log(error)
    return c.json({ message: 'Invalid request' }, 400)
  }
})

nfts.post('/tx', async (c) => {
  try {
    const body = await c.req.json()
    const schema = transactionSchema.safeParse(body)

    if(!schema.success) {
      return c.json(schema.error.errors, 400)
    }

    const txHash = schema.data.transactionHash
    const eventType = schema.data.eventType

    db.transaction(async (tx) => {
      await db.insert(nftEvents).values({
        eventId: randomUUID(),
        transactionHash: txHash,
        eventType: eventType as string
      })

      const event = await tx.query.nftEvents.findFirst({
        where: eq(nftEvents.transactionHash, txHash)
      })

      return c.json(event, 200)
    })
  } catch (error) {
    return c.json({ message: 'Invalid request' }, 400)
  }
})

nfts.get('/activities', async (c) => {
  const schema = nftSchema.omit({ tokenId: true }).safeParse(c.req.query())

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  const events = await db.query.nftEvents.findMany({
    where: eq(nftEvents.address, schema.data.contractAddress)
  })

  return c.json(events, 200)
})