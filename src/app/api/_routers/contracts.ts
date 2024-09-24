import { getContractsByDeployer } from "@/lib/simplehash";
import { walletAddress } from "@/schema/zod";
import { Hono } from "hono";

export const contracts = new Hono()

contracts.get('/getContractsForOwner', async (c) => {
  const query = c.req.query('walletAddress')
  const schema = walletAddress.safeParse(query)

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  const contracts = await getContractsByDeployer(schema.data)

  return c.json(contracts, 200)
})