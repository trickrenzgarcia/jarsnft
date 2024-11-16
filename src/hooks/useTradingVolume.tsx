"use client"

import { useMarketPlaceContext } from '@/components/hooks/use-context'
import { ContractEvent, useContractEvents } from '@thirdweb-dev/react'
import { useState, useEffect } from 'react'

type Sales = ContractEvent<Record<string, any>>[] | undefined;

// This hook must be wrapped within <MarketPlaceProvider> or else this will be thrown Error!
export default function useTradingVolume(contractAddress: string) {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [volume, setVolume] = useState<number | "N/A">()
  const { marketPlaceContract } = useMarketPlaceContext()
  const { data: sales, isLoading: loadingSales, isError: errorSales } = useContractEvents(marketPlaceContract, "NewSale", {
    queryFilter: {
      filters: {
        assetContract: contractAddress
      }
    }
  })

  useEffect(() => {
    if(!loadingSales) {
      setLoading(false)
    }
    if(sales) {
      const getVolume = sales.map((sale) => sale.data)
    }
    console.log(sales)
  }, [sales, loadingSales, errorSales])

  return {
    volume,
    isLoading
  }
}
