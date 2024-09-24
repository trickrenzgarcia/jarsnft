"use server"

import jars from "@/lib/api";
import { revalidateTag } from "next/cache";

type EventType = "TokensMinted" | "Transfer" | "NewListing" | "NewAuction" | "NewBid" | "NewSale" | "CancelledAuction" | "CancelledListing";

export async function createTxHash(event: EventType, txHash: string) {
  if(!txHash) return;
  
  await jars.nft.createTxHash(event, txHash);

  revalidateTag("tx");
  revalidateTag("event");
}