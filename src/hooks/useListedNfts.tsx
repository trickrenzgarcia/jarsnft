"use client"

import jars from '@/lib/api'
import { useEffect, useState } from 'react'

export default function useListedNfts(contractAddress: string) {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [listedCount, setListedCount] = useState<number | undefined>(undefined)
  
  useEffect(() => {
    setLoading(true)
    const getListedCount = async () => {
      // Fetch floor price from contract
      const count = await jars.collection.getListedNfts(contractAddress)
      setListedCount(count)
      setLoading(false)
    }

    getListedCount()
  }, [contractAddress])

  return {
    listedCount,
    isLoading
  }
}
