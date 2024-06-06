"use server"

import { BASE_URL } from "@/lib/ctx";
import { revalidateTag } from "next/cache";

export async function updateNftViews(contractAddress: string, tokenId: string) {
  if(!contractAddress || !tokenId) return;

  await fetch(`${BASE_URL}/nfts/views`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contractAddress: contractAddress,
      tokenId: tokenId,
    }),
  
  });
  
  revalidateTag("views");
}