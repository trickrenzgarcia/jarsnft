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
  sales: ContractEvent<Record<string, any>>[] | undefined;
  loadingSales: boolean;
  errorSales: boolean;
}

export const MarketPlaceContext = createContext<MarketPlaceContext | undefined>(undefined)

function MarketPlaceProvider({ children }: Props) {
  const { contract: marketPlaceContract, isLoading: loadingMarketPlace, isError: errorMarketPlace } = useContract(NFT_MARKETPLACE, "marketplace-v3")
  const { data: sales, isLoading: loadingSales, isError: errorSales } = useContractEvents(marketPlaceContract, "NewSale")

  const marketPlace = useMemo(() => {
   return {
    marketPlaceContract,
    loadingMarketPlace,
    errorMarketPlace,
    sales,
    loadingSales,
    errorSales
   } 
  }, [marketPlaceContract, loadingMarketPlace, errorMarketPlace, sales, loadingSales, errorSales])

  return <MarketPlaceContext.Provider value={marketPlace}>{children}</MarketPlaceContext.Provider>
}

export default MarketPlaceProvider;