'use client'

import { NFT, useContract, useNFTs } from '@thirdweb-dev/react';
import { createContext, ReactNode, useMemo } from 'react';

type Props = {
  children: ReactNode;
  address: string;
}

export type NFTsContext = {
  nfts: NFT[] | undefined;
  loadingNfts: boolean;
  errorNfts: boolean;
}

export const NFTsContext = createContext<NFTsContext | undefined>(undefined)

function NFTsProvider({ children, address }: Props) {
  const { contract } = useContract(address)
  const { data: nfts, isLoading: loadingNfts, isError: errorNfts } = useNFTs(contract)

  const memoizeNfts = useMemo(() => {
    return {
      nfts,
      loadingNfts,
      errorNfts
    }
  }, [nfts, loadingNfts, errorNfts])

  return <NFTsContext.Provider value={memoizeNfts}>{children}</NFTsContext.Provider>
}

export default NFTsProvider