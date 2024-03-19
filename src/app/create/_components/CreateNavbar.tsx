"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '@/components/ui/button'
import { IoArrowBack } from "react-icons/io5";

export default function CreateNavbar() {
  const router = useRouter()
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
        
      </div>
    </header>
  )
}
