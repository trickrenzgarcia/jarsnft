import { jars } from "@/lib/core/api";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const txSchema = z.object({
  contract: z.string().min(1),
  tokenId: z.string().min(1),
});

export async function GET(req: NextRequest) {
  const contract = req.nextUrl.searchParams.get("contract");
  const tokenId = req.nextUrl.searchParams.get("token_id");
  const tx = txSchema.safeParse({ contract, tokenId });

  if(!tx.success) {
    return NextResponse.json({ error: "Invalid Parameters" }, { status: 400, statusText: "Bad Request"});
  }

  if(contract && tokenId) {
    revalidatePath('/collection/[address]/[id]', 'page');
  }

  const data = await jars.nft.getNftActivities(tx.data.contract, tx.data.tokenId);

  return NextResponse.json({ data });
}