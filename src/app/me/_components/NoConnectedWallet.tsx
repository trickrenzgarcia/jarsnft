"use client"

import { ConnectWeb3 } from '@/components/(interfaces)'
import { Wallet } from 'lucide-react'
import React from 'react'

export default function NoConnectedWallet() {
  return (
    <div className='w-full h-[calc(100vh-70px)]'>
        <div className='flex flex-col items-center justify-center w-full h-full gap-4'>
            <Wallet className='w-16 h-16 text-purple-600' />
            <h1 className='text-2xl font-bold text-gray-900 dark:text-gray-200'>Connect your wallet</h1>
            <p className='max-w-3xl text-center'>Connect your wallet seamlessly to JarsNFT Marketplace to unlock exclusive features, securely manage your digital assets, and dive into a world of unique NFTs.</p>
            <ConnectWeb3 btnTitle='Connect Wallet'/>
        </div>
    </div>
  )
}
