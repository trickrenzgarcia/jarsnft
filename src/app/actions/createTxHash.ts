"use server"

import { BASE_URL } from "@/lib/ctx";
import { revalidateTag } from "next/cache";

type EventType = "TokensMinted" | "Transfer" | "NewListing" | "NewAuction" | "NewBid" | "NewSale" | "CancelledAuction" | "CancelledListing";

export async function createTxHash(event: EventType, txHash: string) {
  if(!txHash) return;

  const res = await fetch(`${BASE_URL}/nfts/tx`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify({
      transactionHash: txHash,
      eventType: event,
    }),
  });

  const data = await res.json();

  revalidateTag("tx");
  revalidateTag("event");
  return data;
}