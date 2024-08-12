"use server"

import { BASE_URL } from "@/lib/ctx";
import { revalidateTag } from "next/cache";

export async function updateNftViews(contractAddress: string, tokenId: string) {
  if(!contractAddress || !tokenId) return;

  const res = await fetch(`${BASE_URL}/nfts/views`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify({
      contractAddress: contractAddress,
      tokenId: tokenId,
    }),
  
  });

  const data = await res.json();

  revalidateTag("views");
  return data;
}