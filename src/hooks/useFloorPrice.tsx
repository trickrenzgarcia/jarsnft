"use client"

import jars from '@/lib/api'
import { useEffect, useState } from 'react'

export default function useFloorPrice(contractAddress: string) {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [floorPrice, setFloorPrice] = useState<number | "N/A">(0)
  
  useEffect(() => {
    setLoading(true)
    const getFloorPrice = async () => {
      // Fetch floor price from contract
      const fp = await jars.collection.getFloorPrice(contractAddress)
      setFloorPrice(fp)
      setLoading(false)
    }

    getFloorPrice()
  }, [contractAddress])

  return {
    isLoading, floorPrice
  }
}
