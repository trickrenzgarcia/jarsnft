import { Hono } from "hono";
import { db } from "@/../drizzle/db";
import { defineChain, getContract, getContractEvents } from "thirdweb";
import { newAuctionEvent, newBidEvent, newListingEvent, newSaleEvent } from "thirdweb/extensions/marketplace";
import { client } from "@/lib/thirdweb-sdk";
import { NFT_MARKETPLACE } from "@/lib/constant";
import JSONBigInt from "json-bigint";
import { nftCollections, nftViews } from "@/../drizzle/migrations/schema";
import { sql } from "drizzle-orm";
import { weiToEth } from "@/lib/utils";
import { NewSaleEvent } from "@/types/event";
import { trendingSchema } from "@/schema/zod";

export const collections = new Hono();

collections.get("/test", async (c) => {
  const contract = await getContract({
    client,
    chain: defineChain(137),
    address: NFT_MARKETPLACE,
  });

  const eventsResult = await getContractEvents({
    contract,
    fromBlock: 1n,
    events: [newBidEvent()],
  });

  const serializedSalesEvents = JSONBigInt.parse(JSONBigInt.stringify(eventsResult));

  return c.json(serializedSalesEvents, 200);
});

collections.get("/popular", async (c) => {
  const contract = await getContract({
    client,
    chain: defineChain(137),
    address: NFT_MARKETPLACE,
  });

  const eventsResult = getContractEvents({
    contract,
    fromBlock: 1n,
    events: [newSaleEvent()],
  });

  const colResult = db.query.nftCollections.findMany();

  const [events, collections] = await Promise.all([eventsResult, colResult]);

  const serializedSalesEvents = JSONBigInt.parse(JSONBigInt.stringify(events));

  const contracts = collections.map((collection) => collection.contract);

  const views = await db
    .select({
      contract: nftViews.contract,
      viewCount: sql<number>`SUM(${nftViews.viewCount})`,
    })
    .from(nftViews)
    .where(sql`${nftViews.contract} IN (${contracts.map((contract) => `${contract}`).join(", ")})`)
    .groupBy(nftViews.contract);

  const viewsMap = new Map();
  views.forEach((view) => {
    viewsMap.set(view.contract, view.viewCount);
  });

  const salesMap = new Map();
  serializedSalesEvents.forEach((sale: NewSaleEvent) => {
    const contract = sale.args.assetContract;
    const totalPricePaid = parseFloat(weiToEth(sale.args.totalPricePaid.toString()));
    if (!salesMap.has(contract)) {
      salesMap.set(contract, 0);
    }
    salesMap.set(contract, salesMap.get(contract) + totalPricePaid);
  });

  const combined = collections
    .map((col) => {
      const nftViewsCount = viewsMap.get(col.contract) || 0;
      const totalSales = salesMap.get(col.contract) || 0;
      const combinedPopularityMetric = col.viewCount + nftViewsCount + totalSales;
      return { ...col, combinedPopularityMetric };
    })
    .sort((a, b) => b.combinedPopularityMetric - a.combinedPopularityMetric);

  return c.json(combined.slice(0, 100), 200);
});

collections.get("/trending", async (c) => {
  const schema = trendingSchema.safeParse(c.req.query());

  if (!schema.success) {
    return c.json({ error: schema.error }, 400);
  }

  const collections = await db
    .select()
    .from(nftCollections)
    .where(sql`${nftCollections.category} = ${schema.data.category}`);

  return c.json(collections, 200);
});
