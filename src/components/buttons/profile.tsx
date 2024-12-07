"use client"

import client from '@/lib/client'
import React, { PropsWithChildren } from 'react'
import { useActiveAccount, useActiveWalletChain, useChainMetadata, useWalletBalance } from 'thirdweb/react'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'
import { shortenAddress } from 'thirdweb/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { cn, formatIPFS } from '@/lib/utils'
import { defineChain } from 'thirdweb'

export default function ProfileButton() {
  const activeAccount = useActiveAccount()
  const activeChain = useActiveWalletChain()
  // const switchChain = useSwitchActiveWalletChain()
  const { data: balance, isLoading: loadingBalance } = useWalletBalance({ address: activeAccount?.address, chain: activeChain, client })
  const { data: chainMetadata, isLoading: loadingChainMetadata } = useChainMetadata(defineChain(activeChain?.id as number))
  console.log(chainMetadata)

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" className='h-[45px] border-purple-600 bg-purple-600/20'>
          <Avatar>
            <AvatarImage src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${0}`} alt="@user" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <h1 className='font-bold'>{""}</h1>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='h-screen w-full md:w-[384px] rounded-none'>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        <div className='flex flex-col p-4 gap-2'>
          <UserButton address={activeAccount?.address as string} />
          <UserCard className='flex p-4 gap-1'>
            <Avatar className='border p-2 bg-white'>
              {!loadingChainMetadata && <AvatarImage src={formatIPFS(chainMetadata?.icon?.url as string)} alt={activeChain?.name} />}
              <AvatarFallback>{activeChain?.nativeCurrency?.name}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className='font-semibold'>{balance && parseFloat(balance.displayValue).toFixed(2)} {activeChain?.nativeCurrency?.symbol}</h1>
              <p className='text-xs'>{chainMetadata?.name}</p>
            </div>
          </UserCard>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function UserCard({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('border rounded-lg', className)}>
      {children}
    </div>
  )
}

function UserButton({ address, username }: { address: string, username?: string }) {
  const router = useRouter()

  const redirectToUserProfile = () => {
    router.push(`/u/${username ? username : address}`)
  }

  return (
    <Button variant="ghost" className='py-7 w-fit' onClick={redirectToUserProfile}>
      <Avatar>
        <AvatarImage src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${address}`} alt="@user" />
        <AvatarFallback>{address.slice(0, 1)}</AvatarFallback>
      </Avatar>
      <h1 className='font-bold'>{shortenAddress(address as string)}</h1>
    </Button>
  )
}
