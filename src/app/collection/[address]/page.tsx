import { NFTCollection } from '@/components/(interfaces)'
import { Navbar } from '@/components/(layout)'
import React from 'react'
import NFTMetadata from '../_components/NFTMetadata'
import Image from 'next/image'

type CollectionParams = {
  params: { address: string }
}

export default function CollectionPage({ params: { address }}: CollectionParams) {
  return (
    <main>
      <header>
        <Navbar display='fixed'/>
      </header>
      <div className='relative w-auto h-[250px] md:h-[500px]'>
        <Image src="/assets/collection_banner.webp" fill style={{
          objectFit: "cover"
        }} alt='Collection Banner' />
      </div>
    </main>
  )
}
