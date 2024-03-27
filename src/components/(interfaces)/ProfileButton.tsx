"use client"

import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Spinner} from '@nextui-org/react'
import { Button } from "@/components/ui/button"
import React from 'react'
import { MinidentIconImg } from '.'
import { CgDetailsMore } from "react-icons/cg";
import Link from 'next/link'

import { useLogout, useUser } from '@thirdweb-dev/react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Profile } from '@/types/users'
import { Skeleton } from '../ui/skeleton'

export default function ProfileButton({ user, isUserLoading }: { user: Profile, isUserLoading: boolean}) {
  const { logout, isLoading: logoutLoading } = useLogout()

  return (
    <div className=''>
      <ButtonGroup className='gap-2'>
        <Sheet>
          <SheetTrigger asChild>
            <div className='p-2 flex max-w-[150px] gap-1 items-center h-full rounded-md hover:bg-slate-300 hover:dark:bg-slate-800 cursor-pointer'>
              <MinidentIconImg address={user.data.address} width={30} height={30} />
              <h2 className='truncate font-semibold'>{user.session.name}</h2>
            </div>
          </SheetTrigger>
          <SheetContent>
            <div className='flex flex-col mt-8'>
              <div className='hover:bg-zinc-700/50 px-3 py-2 rounded-lg border cursor-pointer'>
                <Link href='/me'>
                  {isUserLoading ?
                    <div className='flex items-center gap-3'>
                      <Skeleton className='w-[50] h-[50] rounded-full'/>
                      <Skeleton className='w-full h-4 rounded-full'/>
                    </div>
                    :
                    <div className='flex items-center gap-3 w-full'>
                      <MinidentIconImg address={user.data.address} height={50} width={50} />
                      <span className='font-bold truncate'>{user.session.name}</span>
                  </div>}
                </Link>
              </div>
              <div>
                <section>General</section>
                <section>NFTs</section>
                <section>Wallet</section>
                <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Navigation</h4>
                <p className="text-sm text-muted-foreground">
                  # Create <br />
                  # Collections <br />
                  # Trade <br />
                  # Coin Analytics <br />
                  # Insights <br />
                </p>
              </div>
                
            </div>
                <Button
                  onClick={() => logout()}
                  disabled={logoutLoading}
                  className='w-full'
                >{logoutLoading ? <Spinner /> : "Disconnect" }</Button>
              </div>
            </div>
            
          </SheetContent>
        </Sheet>
          

        {/* <Sheet>
          <SheetTrigger asChild>
            <div className='p-2 h-full rounded-md hover:bg-slate-300 hover:dark:bg-slate-800 cursor-pointer'>
              <CgDetailsMore className='text-3xl' />
            </div>
          </SheetTrigger>
          <SheetContent>
            
          </SheetContent>
        </Sheet> */}
        
      </ButtonGroup>
    </div>
  )
}
