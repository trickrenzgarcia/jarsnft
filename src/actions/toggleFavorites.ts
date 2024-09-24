"use server"

import jars from "@/lib/api";
import { revalidateTag } from "next/cache";

const toggleFavorites = async (uid: string, contractAddress: string, tokenId: string) => {
  
  if(!uid || !contractAddress || !tokenId) return;

  await jars.addToFavorite(uid, contractAddress, tokenId);

  revalidateTag("likes");
}

export default toggleFavorites;