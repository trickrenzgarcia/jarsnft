import getIsUserFavorite from "@/actions/getIsUserFavorite";
import { jars } from "@/lib/core/api";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const userLikedSchema = z.object({
  uid: z.string().min(1),
  contract: z.string().min(1),
  tokenId: z.string().min(1),
});

export async function GET(req: NextRequest) {
  const uid = req.nextUrl.searchParams.get("uid");
  const contract = req.nextUrl.searchParams.get("contract");
  const tokenId = req.nextUrl.searchParams.get("token_id");

  const userLiked = userLikedSchema.safeParse({ uid, contract, tokenId });

  if(!userLiked.success) {
    return NextResponse.json({ error: "Invalid Parameters" }, { status: 400, statusText: "Bad Request"});
  }

  const data = await getIsUserFavorite(userLiked.data.uid, userLiked.data.contract, userLiked.data.tokenId);

  return NextResponse.json(data);
}