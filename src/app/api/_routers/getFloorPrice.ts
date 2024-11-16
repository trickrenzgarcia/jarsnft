import { weiToEth } from "@/lib/utils";
import { contractAddress } from "@/schema/zod";
import { ethers } from "ethers";
import { Hono } from "hono";
import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { getAllAuctions, getAllListings, getAllValidAuctions, getAllValidListings } from "thirdweb/extensions/marketplace";

export const getFloorPrice = new Hono();

// Utility to handle BigInt serialization
const replacer = (key: string, value: any) => (typeof value === "bigint" ? value.toString() : value);

const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_API_KEY!,
});

getFloorPrice.get("/", async (c) => {
  const query = c.req.query("contractAddress");
  const schema = contractAddress.safeParse(query);

  if (!schema.success) {
    return c.json(schema.error.errors, 400);
  }

  const contract = getContract({
    client,
    address: process.env.PLATFORM_ADDRESS!,
    chain: sepolia,
  });

  const a1 = getAllAuctions({
    contract,
    start: 0,
    count: 1000n,
  });

  const a2 = getAllListings({
    contract,
    start: 0,
    count: 1000n,
  });

  const [auctions, listings] = await Promise.all([a1, a2]);

  const activeAuctions = auctions.filter((auction) => auction.status === "ACTIVE");
  const activeListings = listings.filter((listing) => listing.status === "ACTIVE");

  const activeAuctionFloorPrice = Math.min(...activeAuctions.map((auction) => Number(weiToEth(auction.minimumBidCurrencyValue.value))));
  const activeListingFloorPrice = Math.min(...activeListings.map((listing) => Number(weiToEth(listing.pricePerToken))));

  if (activeAuctionFloorPrice === 0) return c.json(activeListingFloorPrice, 200);
  else if (activeListingFloorPrice === 0) return c.json(activeAuctionFloorPrice, 200);
  else {
    const floorPrice = Math.min(activeAuctionFloorPrice, activeListingFloorPrice);
    return c.json(floorPrice, 200);
  }
});
