"use server"

import { BASE_URL } from "@/lib/ctx";
import { revalidateTag } from "next/cache";

const toggleFavorites = async (uid: string, contractAddress: string, tokenId: string) => {
  
  if(!uid || !contractAddress || !tokenId) return;

  const res = await fetch(`${BASE_URL}/user/addToFavorite`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid,
      contract: contractAddress,
      token_id: tokenId,
    }),
  
  });
  const data = await res.json();

  revalidateTag("likes");
}

export default toggleFavorites;