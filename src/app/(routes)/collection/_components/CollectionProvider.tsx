"use client"

import { NFT_MARKETPLACE } from '@/lib/constant';
import { type MarketplaceV3, useContract, useNFTs, type NFT, type DirectListingV3, type EnglishAuction, useValidDirectListings, useValidEnglishAuctions } from '@thirdweb-dev/react';
import React, { createContext, use, useEffect, useMemo, useState } from 'react'

type CollectionProvderProps = {
  children: React.ReactNode;
  address: string;
};

type CollectionContextProps = {
  totalListingCount: number;
  marketplace: MarketplaceV3 | undefined;
  nfts: NFT[] | undefined;
  directListings: DirectListingV3[] | undefined;
  auctionListings: EnglishAuction[] | undefined;

};

const CollectionContext = createContext<CollectionContextProps | undefined>(undefined);

export default function CollectionProvider({ children, address }: CollectionProvderProps) {
  const [totalListingCount, setTotalListingCount] = useState<number>(0);
  const { contract: nftContract } = useContract(address);
  const { contract: marketplace, isLoading: loadingMarketplace } = useContract(NFT_MARKETPLACE, "marketplace-v3");
  const { data: nfts, isLoading: loadingNfts } = useNFTs(nftContract);
  
  const { data: directListings, isLoading: loadingDirectListings } = useValidDirectListings(marketplace, {
    tokenContract: address,
    start: 0,
    count: 100,
  });
  const { data: auctionListings, isLoading: loadingAuctionListings } = useValidEnglishAuctions(marketplace, {
    tokenContract: address,
    start: 0,
    count: 100,
  });


  useEffect(() => {
    if (directListings || auctionListings) {
      const collectionDirectListings = directListings?.filter((listing) => listing.assetContractAddress === address);
      const collectionAuctionListings = auctionListings?.filter((listing) => listing.assetContractAddress === address);
      const directListingCount = collectionDirectListings?.length ?? 0;
      const auctionListingCount = collectionAuctionListings?.length ?? 0;
      setTotalListingCount(directListingCount + auctionListingCount);
    }
  }, [directListings, auctionListings, loadingAuctionListings, loadingDirectListings]);

  const collectionMemo = useMemo(() => {
    return {
      totalListingCount: totalListingCount,
      marketplace: marketplace,
      nfts: nfts,
      directListings: directListings,
      auctionListings: auctionListings,
    };
  }, [
      nfts, 
      directListings,
      auctionListings,
      totalListingCount,
      marketplace,
      loadingNfts,
      loadingMarketplace,
      loadingAuctionListings, 
      loadingDirectListings,
    ]
  );

  return <CollectionContext.Provider value={collectionMemo}>{children}</CollectionContext.Provider>
}

export function useCollectionContext() {
  const context = use(CollectionContext);

  if (context === undefined) {
    throw new Error('useCollectionContext must be used within a CollectionProvider');
  }

  return context as CollectionContextProps;
}