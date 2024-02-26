import { NFTCollection } from '@/components/(interfaces)'
import { Navbar } from '@/components/(layout)'
import React from 'react'
import NFTBannerMetadata from '../_components/NFTBannerMetadata'


type CollectionParams = {
  params: { address: string }
}

export default function CollectionPage({ params: { address }}: CollectionParams) {
  return (
    <main>
      <Navbar display="fixed"/>
      <div className='w-full mb-[70px]'/> {/* To remove overlaps between navbar and contents */}
      <NFTBannerMetadata />
      
    </main>
  )
}
