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
import CreateUserDialog from './CreateUserDialog'

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

type UserResponse = {
  success: boolean,
  user: any
}

const ConnectWeb3 = () => {
  const [openCreateUser, setOpenCreateUser] = useState<boolean>(false)
  const router = useRouter()

  return (
    <div>
      <ConnectWallet
        btnTitle="Login"
        modalTitle="JarsNFT"
        auth={{
          onLogin: (address: string) => {
            
          },
          onLogout() {
            console.log("user logged out")
            //signOut()
          },
        }}
        switchToActiveChain={true}
        showThirdwebBranding={false}
        welcomeScreen={() => <LoginWelcomeScreen />}
        modalTitleIconUrl=''
        
      />
      <Dialog open={openCreateUser}>
        <DialogTrigger asChild ></DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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

export default memo(ConnectWeb3)