import { replacer } from "@/lib/utils";
import { contractAddress } from "@/schema/zod";
import { Hono } from "hono";
import { createThirdwebClient, getContract } from "thirdweb";
import { polygon } from "thirdweb/chains";
import { DirectListing, EnglishAuction, getAllAuctions, getAllListings } from "thirdweb/extensions/marketplace";

export const getListedNfts = new Hono();

const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_API_KEY!,
});

getListedNfts.get("/", async (c) => {
  const query = c.req.query("contractAddress");
  const schema = contractAddress.safeParse(query);

  if (!schema.success) {
    return c.json(schema.error.errors, 400);
  }

  const contract = getContract({
    client,
    address: process.env.PLATFORM_ADDRESS!,
    chain: polygon,
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

  const activeAuctions: EnglishAuction[] = JSON.parse(
    JSON.stringify(
      auctions.filter((auction) => auction.assetContractAddress === schema.data).filter((auction) => auction.status === "ACTIVE"),
      replacer,
    ),
  );
  const activeListings: DirectListing[] = JSON.parse(
    JSON.stringify(
      listings.filter((listing) => listing.assetContractAddress === schema.data).filter((listing) => listing.status === "ACTIVE"),
      replacer,
    ),
  );

  const listingCount = activeListings.length + activeAuctions.length;
  return c.json(listingCount, 200);
});
