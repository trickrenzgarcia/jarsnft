import { replacer } from "@/lib/utils";
import { contractAddress } from "@/schema/zod";
import { Hono } from "hono";
import { createThirdwebClient, getContract, getContractEvents, prepareEvent } from "thirdweb";
import { polygon } from "thirdweb/chains";
import { getNFT } from "thirdweb/extensions/erc721";
import { z } from "zod";

export const getNft = new Hono();

const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_API_KEY!,
});

const validateNft = z.object({
  contractAddress,
  tokenId: z.string().min(1),
});

getNft.get("/", async (c) => {
  const contractAddress = c.req.query("contractAddress");
  const tokenId = c.req.query("tokenId");
  const schema = validateNft.safeParse({ contractAddress, tokenId });

  if (!schema.success) {
    return c.json(schema.error.errors, 400);
  }

  const contract = getContract({
    client,
    address: schema.data.contractAddress,
    chain: polygon,
  });

  const nft = await getNFT({
    contract,
    tokenId: BigInt(schema.data.tokenId),
  });

  const nftData = JSON.parse(JSON.stringify(nft, replacer));

  return c.json(nftData, 200);
});
