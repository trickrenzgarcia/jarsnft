"use client"

import jars from '@/lib/api'
import { useEffect, useState } from 'react'

export default function useFloorPrice(contractAddress: string) {
  const [loading, setLoading] = useState<boolean>(false)
  const [floorPrice, setFloorPrice] = useState<number>(0)
  
  useEffect(() => {
    setLoading(true)
    async function getFloorPrice() {
      // Fetch floor price from contract
      const fp = await jars.collection.getFloorPrice(contractAddress)
      console.log('Floor Price:', fp)
      //setFloorPrice(fp)
    }

    getFloorPrice()
    setLoading(false)
  }, [contractAddress])

  return {
    loading, floorPrice
  }
}
