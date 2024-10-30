"use client";

import {
  useContract,
  useNFTs,
} from "@thirdweb-dev/react";
import ErrorNFTCards from "./ErrorNFTCards";
import LoadingNFTCards from "./LoadingNFTCards";
import Link from "next/link";
import NFTCard from './NFTCard';
import { useListingsContext, useNFTsContext } from '@/components/hooks/use-context';

export default function NFTCards({ contractAddress }: { contractAddress: string }) {
  const { nfts, loadingNfts, errorNfts } = useNFTsContext()
  const { auctionListings, directListings } = useListingsContext()

  if (loadingNfts || !nfts) return <LoadingNFTCards />;

  if (errorNfts) return <ErrorNFTCards />;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {nfts.map((nft, i) => (
        <Link key={i} href={`/collection/${contractAddress}/${nft.metadata.id}`}>
          <NFTCard
            nft={nft}
          />
        </Link>
      ))}
    </div>
  );
}
