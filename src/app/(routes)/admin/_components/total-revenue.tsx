"use client"

import { useMarketPlaceContext } from '@/components/hooks/use-context'
import { useContractEvents } from '@thirdweb-dev/react'
import { ethers } from 'ethers'
import React, { useEffect, useState } from 'react'

export default function TotalRevenue() {
  const { marketPlaceContract, loadingMarketPlace, errorMarketPlace } = useMarketPlaceContext()
  const { data: sales, isLoading: loadingSales, isError: errorSales } = useContractEvents(marketPlaceContract, "NewSale")
  const [totalRevenue, setTotalRevenue] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (sales) {
      const total = sales.reduce((acc, sale) => {
        return acc + (parseFloat(ethers.utils.formatEther((sale).data.totalPricePaid)) * 0.02)
      }, 0)
      setTotalRevenue(total)
    }
  }, [sales, loadingSales])

  return (
    <div className="text-2xl font-bold">
      {totalRevenue ? `${totalRevenue.toFixed(3)} POL` : 'Loading...'}
    </div>
  )
}
