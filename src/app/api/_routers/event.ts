import { replacer } from "@/lib/utils";
import { contractAddress } from "@/schema/zod";
import { Hono } from "hono";
import { createThirdwebClient, getContract, getContractEvents } from "thirdweb";
import { sepolia } from "thirdweb/chains";

export const event = new Hono();

const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_API_KEY!,
});

event.get("/getTotalVolume", async (c) => {
  const query = c.req.query("contractAddress");
  const schema = contractAddress.safeParse(query);

  if (!schema.success) {
    return c.json(schema.error.errors, 400);
  }

  const contract = getContract({
    client,
    address: "0x3701Aa174EdcECc8b3383F7ef9d01885A8a52B38",
    chain: sepolia,
  });

  const auctions = await getContractEvents({
    contract,
    blockRange: 10n,
  });

  // serialized BigInts to strings
  const validEvents = JSON.parse(JSON.stringify(auctions, replacer));

  return c.json(validEvents, 200);
});
