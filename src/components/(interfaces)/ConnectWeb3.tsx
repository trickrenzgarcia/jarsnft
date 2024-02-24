"use client"

import { fetchApi } from '@/lib/ctx'
import { ConnectWallet, Web3Button, darkTheme, lightTheme, useAuth, useLogin } from '@thirdweb-dev/react'
import React, { useEffect, useState, memo } from 'react'
import { LoginButton } from '.'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '../ui/button'
import Spline from "@splinetool/react-spline"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type UserResponse = {
  success: boolean,
  user: any
}

const ConnectWeb3 = () => {
  const { data } = useSession()
  console.log(data)
  return (
    <div>
      <ConnectWallet
        btnTitle="Login"
        modalTitle="JarsNFT"
        auth={{
          async onLogin(token) {
            console.log("Authorization ", token)
          },
          onLogout() {
              
          },
        }}
        switchToActiveChain={true}
        showThirdwebBranding={false}
        welcomeScreen={() => <LoginWelcomeScreen />}
        modalTitleIconUrl=''
        
      />
    </div>
  )
}


const LoginWelcomeScreen = () => {
  const welcomeText = "Welcome to jarsnft".split(" ");
  const router = useRouter()
  return (
    <div className='w-full hidden md:flex flex-col '>
      <div className='relative w-auto'>
        <video
          className='w-full h-auto opacity-50'
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
      <div className='absolute flex flex-col w-full h-full items-center mt-64'>
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
          <h1 className='text-2xl font-bold'>{welcomeText.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10
              }}
              key={i}
            >
            {el}{" "}
            </motion.span>
          ))}</h1>
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

export default memo(ConnectWeb3)