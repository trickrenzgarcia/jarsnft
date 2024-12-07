"use client"

import Image from 'next/image'
import ConnectWallet from '../buttons/connect-wallet'

function NavTitle() {
  return (
    <div className='flex items-center gap-1'>
      <Image src="/placeholder.svg" alt='' width={36} height={36}/>
      <h1 className='text-lg font-bold'>JarsNFT</h1>
    </div>
  )
}

export default function NavBar() {
  return (
    <div className='flex items-center justify-between border-b py-2 px-4'>
      <NavTitle />
      <ConnectWallet />
    </div>
  )
}
