"use server"

import jars from "@/lib/api";
import { revalidateTag } from "next/cache";

export async function updateNftViews(contractAddress: string, tokenId: string) {
  if(!contractAddress || !tokenId) return;

  await jars.nft.updateNftViews(contractAddress, tokenId);

  revalidateTag("views");
}