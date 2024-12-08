"use client"

import client from '@/lib/client'
import React, { PropsWithChildren, useState } from 'react'
import { useActiveAccount, useActiveWallet, useActiveWalletChain, useChainMetadata, useDisconnect, useWalletBalance } from 'thirdweb/react'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'
import { shortenAddress } from 'thirdweb/utils'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { cn, formatIPFS } from '@/lib/utils'
import { defineChain } from 'thirdweb'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { LogOut } from 'lucide-react'

export default function ProfileButton() {
  const [open, setOpen] = useState(false)
  const activeAccount = useActiveAccount()
  const wallet = useActiveWallet()
  const activeChain = useActiveWalletChain()
  const { disconnect } = useDisconnect()
  // const switchChain = useSwitchActiveWalletChain()
  const { data: balance, isLoading: loadingBalance } = useWalletBalance({ address: activeAccount?.address, chain: activeChain, client })
  const { data: chainMetadata, isLoading: loadingChainMetadata } = useChainMetadata(defineChain(activeChain?.id as number))
  console.log(chainMetadata)

  const disconnectWallet = () => {
    if(wallet) {
      disconnect(wallet)
    }
    setOpen(false)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" className='h-[45px] bg-muted/60 px-2'>
          <div className='relative'>
            <Avatar className='w-9 h-9'>
              <AvatarImage src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${0}`} alt="@user" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            {chainMetadata && chainMetadata.icon && (
              <div className='absolute flex items-center justify-center right-0 bottom-0 w-4 h-4 border-black bg-white rounded-full'>
                <Image src={formatIPFS(chainMetadata.icon.url as string)} alt='' width={12} height={12} />
              </div>
            )}
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className='h-screen w-full md:w-[384px] md:mr-2 rounded-none bg-navbg'>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        <div className='flex flex-col p-4 gap-2'>
          <div className='flex justify-between items-center'>
            <UserButton address={activeAccount?.address as string} />
            <Button variant="link" onClick={disconnectWallet}>
              Logout <LogOut size={16} className='ml-1' />
            </Button>
          </div>
          <UserCard className='flex justify-between p-4 bg-muted/50'>
            <div className='flex gap-1'>
              <Avatar className='border p-2 bg-white'>
                {!loadingChainMetadata && <AvatarImage src={formatIPFS(chainMetadata?.icon?.url as string)} alt={activeChain?.name} />}
                <AvatarFallback>{activeChain?.nativeCurrency?.name}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className='font-semibold'>{balance && parseFloat(balance.displayValue).toFixed(2)} {activeChain?.nativeCurrency?.symbol}</h1>
                <p className='text-xs'>{chainMetadata?.name}</p>
              </div>
            </div>
            
            <div className=''>
              <Badge>Active</Badge>
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
