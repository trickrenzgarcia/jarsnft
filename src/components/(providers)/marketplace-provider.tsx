'use client'

import { NFT_MARKETPLACE } from '@/lib/constant'
import { ContractEvent, type MarketplaceV3, useContract, useContractEvents } from '@thirdweb-dev/react'
import { createContext, ReactNode, useMemo } from 'react'

type Props = {
  children: ReactNode
}

export type MarketPlaceContext = {
  marketPlaceContract: MarketplaceV3 | undefined;
  loadingMarketPlace: boolean;
  errorMarketPlace: boolean;
}

export const MarketPlaceContext = createContext<MarketPlaceContext | undefined>(undefined)

function MarketPlaceProvider({ children }: Props) {
  const { contract: marketPlaceContract, isLoading: loadingMarketPlace, isError: errorMarketPlace } = useContract(NFT_MARKETPLACE, "marketplace-v3")

  const marketPlace = useMemo(() => {
   return {
    marketPlaceContract,
    loadingMarketPlace,
    errorMarketPlace
   } 
  }, [marketPlaceContract, loadingMarketPlace, errorMarketPlace])

  return <MarketPlaceContext.Provider value={marketPlace}>{children}</MarketPlaceContext.Provider>
}

export default MarketPlaceProvider;