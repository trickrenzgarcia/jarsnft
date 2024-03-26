"use client"

import { TooltipMsg } from '@/components/(interfaces)'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { shortenAddress } from '@/lib/utils'
import { Profile } from '@/types/users'
import { useUser } from '@thirdweb-dev/react'
import { minidenticon } from 'minidenticons'
import React, { useEffect, useMemo } from 'react'
import { IoCopy } from "react-icons/io5";
type User<T> = {
  user: T | undefined
  isLoading: boolean
  isLoggedIn: boolean
}

export default function ProfileCard() {
  const { user, isLoading, isLoggedIn } = useUser() as User<Profile>
  
  const svgURI = useMemo(
    () => 'data:image/svg+xml;utf8,' + encodeURIComponent(minidenticon(user?.address || "")),
    [user?.address]
  )
  
  return (
    <Card className="max-w-[300px] w-[300px] mb-5 bg-default-200 dark:bg-neutral-900">
      <CardHeader className="w-full flex flex-col items-center">
        <Avatar className="w-[100px] h-[100px] border-2 border-purple-600">
          <AvatarImage
            className="aspect-auto bg-muted"
            src={svgURI}
            alt="@image_collection"
          />
          <AvatarFallback className="w-[100px] h-[100px]">
            CN
          </AvatarFallback>
        </Avatar>
        <h1 className='w-full truncate text-center font-semibold text-xl py-2'>{user?.session.name}</h1>
        <div className='flex items-center gap-2'>
          <h2 className='w-full text-center text-sm'>{shortenAddress(user?.address || "", 15, 5)}</h2>
          <TooltipMsg message='Copy' delay={100}>
            <button onClick={(e) => {
              e.preventDefault()
              navigator.clipboard.writeText(user?.address || "")
            }}>
              <IoCopy className='cursor-pointer'/>
            </button>
          </TooltipMsg>
        </div>
      </CardHeader>
      
      <CardContent className="px-5">

      </CardContent>
    </Card>
  )
}
