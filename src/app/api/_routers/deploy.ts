import { Hono } from "hono";
import { db } from "@/../drizzle/db";
import { deployContract } from "@/schema/zod";
import { client, chain } from "@/lib/thirdweb-sdk";
import { getContract } from "thirdweb";
import { getContractMetadata } from "thirdweb/extensions/common";
import { nftCollections } from "@/../drizzle/migrations/schema";
import { ContractMetadata } from "@/schema/types";
import { eq } from "drizzle-orm";

export const deploy = new Hono();

deploy.get("/nft-collection", async (c) => {
  const data = await db.query.nftCollections.findMany({
    limit: 100,
  });
  return c.json(data, 200);
});

deploy.post("/nft-collection", async (c) => {
  const body = await c.req.json();
  const schema = deployContract.safeParse(body);

  if (!schema.success) {
    return c.json(schema.error.errors, 400);
  }

  const contract = getContract({
    client: client,
    chain,
    address: schema.data.contractAddress,
  });

  const metadata: ContractMetadata = (await getContractMetadata({ contract })) as ContractMetadata;

  if (!metadata) {
    return c.json({ message: "Failed to fetch metadata" }, 400);
  }

  await db.insert(nftCollections).values({
    contract: schema.data.contractAddress,
    image: metadata.image,
    name: metadata.name,
    symbol: metadata.symbol,
    description: metadata.description,
    appUri: metadata.app_uri,
    externalLink: metadata.external_link,
    feeRecipient: metadata.fee_recipient,
    sellerFeeBasisPoints: metadata.seller_fee_basis_points,
    primarySaleRecipient: metadata.primary_sale_recipient,
    owner: schema.data.owner,
    category: schema.data.category,
    safeListed: 0,
    isVerified: 0,
    isNsfw: 0,
    viewCount: 0,
  });

  const contractData = await db.query.nftCollections.findFirst({
    where: eq(nftCollections.contract, schema.data.contractAddress),
  });

  if (!contractData) {
    return c.json({ message: "Failed to create contract" }, 500);
  }

  return c.json(contractData, 200);
});

deploy.get("polygon", async (c) => {
  const contract = getContract({
    client: client,
    chain,
    address: "0xDEF2a9B7e68b0849418Fed04A6298520705BCE98",
  });
  const metadata = (await getContractMetadata({ contract })) as ContractMetadata;
  return c.json(metadata, 200);
});
