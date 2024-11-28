"use client";

import { NFT, useContract, useNFTs } from "@thirdweb-dev/react";
import ErrorNFTCards from "./ErrorNFTCards";
import LoadingNFTCards from "./LoadingNFTCards";
import Link from "next/link";
import NFTCard from "./NFTCard";
import { useListingsContext, useNFTsContext } from "@/components/hooks/use-context";
import { weiToEth } from "@/lib/utils";

export default function NFTCards({ contractAddress }: { contractAddress: string }) {
  const { nfts, loadingNfts, errorNfts } = useNFTsContext();
  const { auctionListings, directListings } = useListingsContext();

  if (loadingNfts || !nfts) return <LoadingNFTCards />;

  if (errorNfts) return <ErrorNFTCards />;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {nfts.map((nft: NFT, i: number) => {
        let nftPrice =
          directListings?.find((listing) => listing.tokenId === nft.metadata.id)?.pricePerToken ||
          auctionListings?.find((listing) => listing.tokenId === nft.metadata.id)?.buyoutBidAmount;
        nftPrice = nftPrice ? weiToEth(nftPrice).toString() : undefined;

        const hasBidding = auctionListings?.find((listing) => listing.tokenId === nft.metadata.id) ? true : false;
        let minimumBid = hasBidding
          ? auctionListings?.find((listing) => listing.tokenId === nft.metadata.id)?.minimumBidAmount.toString()
          : undefined;
        minimumBid = minimumBid ? weiToEth(minimumBid).toString() : undefined;

        return (
          <Link key={i} href={`/collection/${contractAddress}/${nft.metadata.id}`}>
            <NFTCard nft={nft} price={nftPrice} isBidding={hasBidding} minimumBid={minimumBid} />
          </Link>
        );
      })}
    </div>
  );
}
