"use server";

import { JarsAPI } from "@/lib/api";
import { NFTCollection } from "@/types";

const api = new JarsAPI({
  baseUrl: process.env.API_URL,
  secretKey: process.env.JWT_SECRET,
});

export async function fetchCollections(owner: string | undefined): Promise<NFTCollection[] | undefined> {
  if (!owner) return;

  const data = await api.getCollectionsByOwner(owner);
  return data;
}
