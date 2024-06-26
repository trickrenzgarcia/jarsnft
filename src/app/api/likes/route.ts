import { jars } from "@/lib/core/api";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const likesSchema = z.object({
  contract: z.string().min(1),
  tokenId: z.string().min(1),
});

export async function GET(req: NextRequest) {
  const contract = req.nextUrl.searchParams.get("contract");
  const tokenId = req.nextUrl.searchParams.get("token_id");

  const likes = likesSchema.safeParse({ contract, tokenId });

  if(!likes.success) {
    return NextResponse.json({ error: "Invalid Parameters" }, { status: 400, statusText: "Bad Request"});
  }

  const data = await jars.getFavoriteCount(likes.data.contract, likes.data.tokenId);

  return NextResponse.json({ data });
}