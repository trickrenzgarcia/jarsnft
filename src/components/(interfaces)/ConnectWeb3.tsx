"use client"

import { ConnectWallet } from '@thirdweb-dev/react'
import React, { useState} from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

type UserResponse = {
  success: boolean,
  user: any
}

const ConnectWeb3 = ({ btnTitle}: { btnTitle: string | undefined }) => {
  const router = useRouter()

  return (
    <div>
      <ConnectWallet
        btnTitle={btnTitle}
        modalTitle="JarsNFT"
        switchToActiveChain={true}
        showThirdwebBranding={false}
        welcomeScreen={() => <LoginWelcomeScreen />}
        modalTitleIconUrl=''
        
      />
      
    </div>
  )
}


const LoginWelcomeScreen = () => {

  return (
    <div className='w-full h-full hidden md:flex flex-col overflow-hidden'>
      <div className='relative w-auto'>
        <video
          className='w-full opacity-50'
          preload='false'
          playsInline
          loop
          muted
          // @ts-ignore
          autoPlay="autoplay"
          src='/assets/rocket.mp4'
        >
        </video>
      </div>
      <div className='absolute flex flex-col w-full h-full items-center justify-center'>
        <motion.div
          animate={{
          scale: [1, 1.8, 1.8, 1, 1],
          rotate: [0, 0, 0, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1
            
          }}
        >
          <h1 className='text-2xl font-bold mt-36'>Welcome to jarsnft</h1>
        </motion.div>
        <p className='mt-2 font-medium'>Connect your wallet to trade NFTs.</p>
        <Link 
          href="/learn/getting-started#installing-wallet"
          target='_blank'
          className='cursor-pointer text-gray-300 hover:text-white mt-40'
        >
          New to Wallets?
        </Link>
      </div> 
    </div>
  )
}

export default ConnectWeb3