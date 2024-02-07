"use client"
import { useContract } from '@thirdweb-dev/react'
import { notFound } from 'next/navigation';
import React, { useEffect, useMemo } from 'react'

type CollectionProps = { contract: string }

function useCollectionMemo(contract: string) {
  const data = useContract(contract);

  const cache = useMemo(() => {
    return data
  }, [data])
  return cache
}

export default function NFTCollection({ contract }: CollectionProps) {
  const { data, isError, isLoading } = useCollectionMemo(contract)
  
  if(isLoading) return <>Loading...</>

  if(isError) return notFound()


  if(data)
    return (
      <div>
        NFTCollection
      </div>
    )
}
