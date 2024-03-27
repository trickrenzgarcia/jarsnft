"use client"

import { PageNextButton } from './_components'
// import { rightNavList } from '../_metadata'


export default function Page() {
  return (
    <div className='w-full h-[2000px] p-6 '>
      <h1 className='text-4xl my-6 font-bold'>Welcome</h1>
      <p className='my-12 tracking-wide'>Welcome to the JarsNft guides and frequently asked questions.<br/><br/>
      Contents:</p>
      <h2 className='text-2xl my-6 font-bold'>Getting Started</h2>
      <ul className='lg:list-disc ml-8 text-[#A519D7] font-semibold leading-9 mb-12'>
        <li>Installing a Wallet</li>
        <li>Connecting your wallet</li>
        <li>Creating your profile</li>
      </ul>
      <h2 className='text-2xl my-6 font-bold'>Buying NFTs</h2>
      <ul className='lg:list-disc ml-8 text-[#A519D7] font-semibold leading-9 mb-12'>
        <li>Buying a fixed price NFT</li>
        <li>Making an offer on a NFT</li>
      </ul>
      <h2 className='text-2xl my-6 font-bold'>Selling NFTs</h2>
      <ul className='lg:list-disc ml-8 text-[#A519D7] font-semibold leading-9 mb-12'>
        <li>Accepting an offer on your NFT</li>
        <li>Listing an NFT for sale a fixed price</li>
      </ul>

      <PageNextButton title='Getting Started' href='/learn/getting-started' />
    </div>
  )
}