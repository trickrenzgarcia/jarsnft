"use client"

import { useContract, useNFTs } from '@thirdweb-dev/react'
import React from 'react'

export default function useTotalItems(contractAddress: string) {
  const { contract } = useContract(contractAddress)
  const { data: nfts, isLoading, isError } = useNFTs(contract)
  const [count, setCount] = React.useState<number | undefined>(undefined)

  React.useEffect(() => {
    if (nfts) {
      setCount(nfts.length)
    }
  }, [nfts, isLoading])
  
  return {
    totalItems: count,
    isLoading,
    isError
  }
}
