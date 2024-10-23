'use client'

import { NFT, useContract, useNFTs } from '@thirdweb-dev/react';
import { createContext, ReactNode, useMemo } from 'react';
import { useContractContext } from '../hooks/use-context';

type Props = {
  children: ReactNode;
}

export type NFTsContext = {
  nfts: NFT[] | undefined;
  loadingNfts: boolean;
  errorNfts: boolean;
}

export const NFTsContext = createContext<NFTsContext | undefined>(undefined)

function NFTsProvider({ children }: Props) {
  const { contract } = useContractContext()
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