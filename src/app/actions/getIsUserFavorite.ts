"use server"

import { BASE_URL } from "@/lib/ctx";
import { revalidateTag } from "next/cache";

const getIsUserFavorite = async (uid: string, contractAddress: string, tokenId: string) => {
  if(!uid || !contractAddress || !tokenId) return;

  const res = await fetch(`${BASE_URL}/user/isUserLiked?uid=${uid}&contract=${contractAddress}&token_id=${tokenId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  revalidateTag("likes");
  return data;
}

export default getIsUserFavorite;