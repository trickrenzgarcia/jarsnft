"use client"

import { NFTCollection } from '@/types'
import { useState, useEffect } from 'react'
import { fetchCollections as jarsCollectionsByOwner } from '@/actions/getCollectionsByOwner'


export default function useCollectionsByOwner(owner: string | undefined) {
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [collections, setCollections] = useState<NFTCollection[] | undefined>([])

  useEffect(() => {
    const fetchCollections = async () => {
      setLoading(true)
      try {
        const collections = await jarsCollectionsByOwner(owner);
        setCollections(collections)
      } catch (error: any) {
        setErrorMessage(error.message)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchCollections()
  }, [owner])

  return {
    collections,
    isLoading,
    isError,
    errorMessage
  }
}
