import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Photography | JarsNFT Marketplace",
  };
}

export default function PhotographyPage() {
  return (
    <div className='container h-[700px]'>
      <h1 className='text-4xl'>Explore Photography NFTs</h1>
    </div>
  )
}
