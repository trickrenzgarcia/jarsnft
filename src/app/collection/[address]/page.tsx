import { NFTCollection } from '@/components/(interfaces)'
import React from 'react'

type CollectionParams = {
  params: { address: string }
}

export default function CollectionPage({ params: { address }}: CollectionParams) {
  return (
    <main className='mt-20'>
      <div>
        <h1>NFT Collection: {address}</h1>
        <NFTCollection contract={address} />
      </div>
    </main>
  )
}
