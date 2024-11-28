"use client";

import { useListingsContext } from "@/components/hooks/use-context";

export default function AvailableAuctionNotification() {
  const { auctionListings } = useListingsContext();

  if (!auctionListings?.length) {
    return <></>;
  }

  if (auctionListings.length === 1) {
    return <div className="flex h-8 items-center justify-center rounded-b-2xl bg-purple-400">1 NFT is available for bidding!</div>;
  }

  return (
    <div className="flex h-8 items-center justify-center rounded-b-2xl bg-purple-400">{`${auctionListings?.length} NFTs are available for bidding!`}</div>
  );
}
