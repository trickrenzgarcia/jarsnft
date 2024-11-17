"use client"

import { NFT_MARKETPLACE } from '@/lib/constant';
import { weiToEth } from '@/lib/utils';
import { ContractEvent, useContract, useContractEvents } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers';
import { useState, useEffect } from 'react'

type Sales = ContractEvent<Record<string, any>>[] | undefined;

export default function useVolumeAndSales(contractAddress: string) {
  const { contract } = useContract(NFT_MARKETPLACE, "marketplace-v3")
  const { data: sales, isError: errorEvents } = useContractEvents(contract, "NewSale")
  const [totalVolume, setTotalVolume] = useState<number | undefined>(undefined)
  const [totalSales, setTotalSales] = useState<number | undefined>(undefined)
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if(sales) {
      const assetContracts = sales.filter((sale) => sale.data.assetContract === contractAddress)
      const volume = assetContracts.reduce((acc, sale) => acc + Number(weiToEth(BigNumber.from(sale.data.totalPricePaid))), 0)
      setTotalVolume(volume)
      setTotalSales(assetContracts.length)
    } else {
      setTotalVolume(0)
      setTotalSales(0)
    }
    setLoading(false)
  }, [contractAddress, contract, sales, errorEvents])

  return {
    totalVolume,
    totalSales,
    isLoading,
    isError: errorEvents
  }
}
