"use client"

import { NFT_MARKETPLACE } from '@/types/constant';
import { MarketplaceV3, NFT, useBalance, useContract, useContractMetadata, useNFT } from '@thirdweb-dev/react';
import { BigNumber } from 'ethers';
import React, { createContext, use, useMemo } from 'react'

type NftProviderProps = {
  children: React.ReactNode;
  address: string;
  id: string;
};

type NftItemContextProps = {
  nft: NFT | undefined;
  loadingNft: boolean;
  collection: any;
  loadingCollection: boolean;
  marketPlaceContract: MarketplaceV3 | undefined;
  loadingMarketplace: boolean;
  balance: {
    symbol: string;
    value: BigNumber;
    name: string;
    decimals: number;
    displayValue: string;
  } | undefined;
  loadingBalance: boolean;
}

const NftItemContext = createContext<NftItemContextProps | undefined>(undefined);

export default function NftProvider({ children, address, id }: NftProviderProps) {
  const { contract: nftContract } = useContract(address);
  const { data: collection, isLoading: loadingCollection } = useContractMetadata(nftContract);
  const { data: nft, isLoading: loadingNft} = useNFT(nftContract, id);
  const { contract: marketPlaceContract, isLoading: loadingMarketplace } = useContract(NFT_MARKETPLACE, "marketplace-v3");
  const { data: balance, isLoading: loadingBalance } = useBalance();

  const nftMemo = useMemo(() => {
    return {
      nft: nft,
      loadingNft: loadingNft,
      collection: collection,
      loadingCollection: loadingCollection,
      marketPlaceContract: marketPlaceContract,
      loadingMarketplace: loadingMarketplace,
      balance: balance,
      loadingBalance: loadingBalance,
    };
  }, [nft, collection, marketPlaceContract, loadingNft, loadingCollection, loadingMarketplace]);

  return <NftItemContext.Provider value={nftMemo}>{children}</NftItemContext.Provider>
}

export function useNftContext() {
  const context = use(NftItemContext);

  if(context === undefined) {
    throw new Error("The nft context is undefined, wrap in NftItemContext.Provider");
  }

  return context as NftItemContextProps;
}