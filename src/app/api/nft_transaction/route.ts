import { jars } from "@/lib/core/api";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const txHashSchema = z.object({
  transactionHash: z.string().min(1),
});

export async function GET(req: NextRequest) {
  const transactionHash = req.nextUrl.searchParams.get("transactionHash");
  const txHash = txHashSchema.safeParse({ transactionHash });

  if(!txHash.success) {
    return NextResponse.json({ error: "Invalid Parameters" }, { status: 400, statusText: "Bad Request"});
  }

  const data = await jars.nft.getTransactionByHash(txHash.data.transactionHash);
  
  return NextResponse.json({ data });
}