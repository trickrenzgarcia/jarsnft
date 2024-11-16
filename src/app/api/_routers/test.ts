import { Hono } from "hono";
import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { getNFTs } from "thirdweb/extensions/erc721";

export const test = new Hono();

// Utility to handle BigInt serialization
const replacer = (key: string, value: any) => (typeof value === "bigint" ? value.toString() : value);

const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_API_KEY!,
});

test.get("/", async (c) => {
  const contract = getContract({
    client,
    chain: sepolia,
    address: "0x06b4D77C2d4b13D07930Bd4AF97b86AF7563eEFd",
  });

  const nfts = await getNFTs({
    contract,
    start: 0,
    count: 10,
  });

  return c.json(JSON.parse(JSON.stringify(nfts, replacer)), 200);
});
