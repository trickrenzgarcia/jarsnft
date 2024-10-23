'use client'

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'
import { useContractContext } from '@/components/hooks/use-context';
import { type NFT, useAddress, useNFT, useOwnedNFTs } from '@thirdweb-dev/react';

type Props = {
  children: ReactNode;
  address: string;
  tokenId: string;
}

export type NFTContext = {
  nft: NFT | undefined;
  loadingNFT: boolean;
  errorNFT: boolean;
  ownedNFTs: NFT[] | undefined;
  loadingOwnedNFTs: boolean;
  errorOwnedNFTs: boolean;
  address: string;
  tokenId: string;
  connectedAddress?: string;
  filteredNFT: NFT | undefined;
}

export const NFTContext = createContext<NFTContext | undefined>(undefined)

function NFTProvider({ children, address, tokenId }: Props) {
  const [filteredNFT, setFilteredNFT] = useState<NFT | undefined>()
  const connectedAddress = useAddress()
  const { contract } = useContractContext()
  const { data: nft, isLoading: loadingNFT, isError: errorNFT } = useNFT(contract, tokenId)
  const { data: ownedNFTs, isLoading: loadingOwnedNFTs, isError: errorOwnedNFTs } = useOwnedNFTs(contract, connectedAddress)

  useEffect(() => {
    if(ownedNFTs) {
      setFilteredNFT(ownedNFTs.find((nft) =>  nft.metadata.id === tokenId))
    }
  }, [ownedNFTs, loadingOwnedNFTs, connectedAddress])

  const memoizeNFT = useMemo(() => {
    return {
      nft,
      loadingNFT,
      errorNFT,
      ownedNFTs,
      loadingOwnedNFTs,
      errorOwnedNFTs,
      address,
      tokenId,
      connectedAddress,
      filteredNFT
    }
  }, [nft, ownedNFTs, connectedAddress, loadingNFT, errorNFT, loadingOwnedNFTs, errorOwnedNFTs, filteredNFT])

  return <NFTContext.Provider value={memoizeNFT}>{children}</NFTContext.Provider>
}

export default NFTProvider