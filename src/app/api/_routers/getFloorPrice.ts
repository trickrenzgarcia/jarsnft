import { replacer, weiToEth } from "@/lib/utils";
import { contractAddress } from "@/schema/zod";
import { BigNumber, ethers } from "ethers";
import { Hono } from "hono";
import { createThirdwebClient, getContract } from "thirdweb";
import { polygon } from "thirdweb/chains";
import { DirectListing, EnglishAuction, getAllAuctions, getAllListings } from "thirdweb/extensions/marketplace";

export const getFloorPrice = new Hono();

const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_API_KEY,
});

getFloorPrice.get("/", async (c) => {
  const query = c.req.query("contractAddress");
  const schema = contractAddress.safeParse(query);

  if (!schema.success) {
    return c.json(schema.error.errors, 400);
  }

  const contract = getContract({
    client,
    address: "0x7877FfDdb8805ca61e13DA091BEEC61B268df3dc",
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
      auctions
        .filter((auction) => auction.assetContractAddress === schema.data)
        .filter((auction) => auction.status === "ACTIVE"),
      replacer,
    ),
  );
  const activeListings: DirectListing[] = JSON.parse(
    JSON.stringify(
      listings
        .filter((listing) => listing.assetContractAddress === schema.data)
        .filter((listing) => listing.status === "ACTIVE"),
      replacer,
    ),
  );

  const activeAuctionFloorPrice = Math.min(
    ...activeAuctions.map((auction) => Number(weiToEth(BigNumber.from(auction.minimumBidCurrencyValue.value)))),
  );
  const activeListingFloorPrice = Math.min(...activeListings.map((listing) => Number(weiToEth(BigNumber.from(listing.pricePerToken)))));

  const checkIfNullAuctions = activeAuctionFloorPrice === Infinity; // Check if there are no active auctions
  const checkIfNullListings = activeListingFloorPrice === Infinity; // Check if there are no active listings

  if (checkIfNullAuctions && checkIfNullListings) return c.json("N/A", 200);
  else if (activeAuctionFloorPrice === 0) return c.json(activeListingFloorPrice, 200);
  else if (activeListingFloorPrice === 0) return c.json(activeAuctionFloorPrice, 200);
  else {
    const floorPrice = Math.min(activeAuctionFloorPrice, activeListingFloorPrice);
    return c.json(floorPrice, 200);
  }
});
