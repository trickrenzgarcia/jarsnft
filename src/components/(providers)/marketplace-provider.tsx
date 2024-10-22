'use client'

import { NFT_MARKETPLACE } from '@/lib/constant'
import { type MarketplaceV3, useContract } from '@thirdweb-dev/react'
import { createContext, ReactNode, useMemo } from 'react'

type Props = {
  children: ReactNode
}

export type MarketPlaceContext = {
  marketPlaceContract: MarketplaceV3 | undefined;
  loadingMarketPlace: boolean;
}

export const MarketPlaceContext = createContext<MarketPlaceContext | undefined>(undefined)

function MarketPlaceProvider({ children }: Props) {
  const { contract: marketPlaceContract, isLoading: loadingMarketPlace } = useContract(NFT_MARKETPLACE, "marketplace-v3")

  const marketPlace = useMemo(() => {
   return {
    marketPlaceContract,
    loadingMarketPlace
   } 
  }, [marketPlaceContract, loadingMarketPlace])

  return <MarketPlaceContext.Provider value={marketPlace}>{children}</MarketPlaceContext.Provider>
}

export default MarketPlaceProvider;