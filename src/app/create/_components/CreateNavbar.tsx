"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '@/components/ui/button'
import { IoArrowBack } from "react-icons/io5";
import { useUserContext } from '@/components/(providers)'
import { ConnectWeb3, MinidentIconImg } from '@/components/(interfaces)'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'

export default function CreateNavbar() {
  const router = useRouter()
  const { user, isLoading, isLoggedIn } = useUserContext();
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center justify-between'>
        <div className='flex items-center gap-1'>
          <Button 
            className='px-[12px] py-[10px] rounded-full' 
            variant="ghost"
            onClick={() => router.back()}
          >
            <IoArrowBack className='text-lg' />
          </Button>
            
          <h1 className='font-semibold'>Go back</h1>
        </div>
        
        <div className='block lg:hidden'>
          {isLoading && <Skeleton className='h-9 w-9 rounded-full'/> ||
          <Sheet>
            <SheetTrigger asChild>
              {(!user && <ConnectWeb3 btnTitle='Connect Wallet' />) || 
              (user && (
                <div className='cursor-pointer'>
                  <MinidentIconImg address={user.data.address} width={36} height={36} />
                </div> 
              ))}
            </SheetTrigger>
            <SheetContent>

            </SheetContent>
          </Sheet>
          }
        </div>
      </div>
    </header>
  )
}
