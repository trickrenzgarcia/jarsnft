"use client";

import {
  useContract,
  useNFTs,
} from "@thirdweb-dev/react";
import ErrorNFTCards from "./ErrorNFTCards";
import LoadingNFTCards from "./LoadingNFTCards";
import Link from "next/link";
import NFTCard from './NFTCard';

export default function NFTCards({ address }: { address: string }) {
  const { contract } = useContract(address);

  const { data: nfts, isError, isLoading } = useNFTs(contract);

  if (isError) return <ErrorNFTCards />;

  if (isLoading) return <LoadingNFTCards />;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {nfts.map((nft, i) => (
        <Link key={i} href={`/collection/${address}/${nft.metadata.id}`}>
          <NFTCard
            contractAddress={address}
            nft={nft}
          />
        </Link>
      ))}
    </div>
  );
}
