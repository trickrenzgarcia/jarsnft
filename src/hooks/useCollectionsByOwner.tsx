"use client"

import { NFTCollection } from '@/types'
import { useState, useEffect } from 'react'
import { useAddress } from '@thirdweb-dev/react'

const url = process.env.NEXT_PUBLIC_APP_URL;
const token = process.env.NEXT_PUBLIC_JWT_TOKEN;

export default function useCollectionsByOwner() {
  const address = useAddress()
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [collections, setCollections] = useState<NFTCollection[] | undefined>([])

  useEffect(() => {
    const fetchCollections = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${url}/api/v1/collection/getCollectionsByOwner?owner=${address}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        })
        const collections = await response.json()
        setCollections(collections)
      } catch (error: any) {
        setErrorMessage(error.message)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchCollections()
  }, [address])

  return {
    collections,
    isLoading,
    isError,
    errorMessage
  }
}
