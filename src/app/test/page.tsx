"use client"

import { useUserState } from '@/state/store'
import { useContract } from '@thirdweb-dev/react'
import React, { useEffect } from 'react'

export default function Page() {
  const { data, isError, isLoading } = useContract("0x317197Bcbf59603cd999fFC9e090279b35b60249");
  
  if(isError) return <h1>Error...</h1>

  if(isLoading) return <h1>Loading...</h1>

  if(data)
    return (

      <div>Page</div>
    )
}
