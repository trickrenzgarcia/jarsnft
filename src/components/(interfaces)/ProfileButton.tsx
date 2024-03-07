"use client"

import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Spinner} from '@nextui-org/react'
import { Button } from "@/components/ui/button"
import React from 'react'
import { MinidentIconImg } from '.'
import { CgDetailsMore } from "react-icons/cg";
import Link from 'next/link'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useLogout } from '@thirdweb-dev/react';

export default function ProfileButton({ address }: {address: string}) {
  const { logout, isLoading } = useLogout()
  
  return (
    <div className=''>
      <ButtonGroup className='gap-2'>
        <Link href="/me">
          <div className='p-2 h-full rounded-md hover:bg-slate-300 hover:dark:bg-slate-800 cursor-pointer'>
            <MinidentIconImg address={address} width={30} height={30} />
          </div>
          
        </Link>
        <Popover>
          <PopoverTrigger>
            <div className='p-2 h-full rounded-md hover:bg-slate-300 hover:dark:bg-slate-800 cursor-pointer'>
              <CgDetailsMore className='text-3xl' />
            </div>
          </PopoverTrigger>
          <PopoverContent className='w-80'>
          <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Profile</h4>
            <p className="text-sm text-muted-foreground">
              # Profile <br />
              # Dark Mode switch <br />
              # Settings <br />
              # Disconnect Wallet <br />
            </p>
            <Button
              onClick={() => logout()}
            >Disconnect</Button>
          </div>
              
        </div>
          </PopoverContent>
        </Popover>
        
      </ButtonGroup>
    </div>
  )
}
