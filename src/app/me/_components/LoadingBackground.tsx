"use client"

import { Spinner } from "@nextui-org/react"

export default function LoadingBackground() {
  return (
    <div className='w-full h-[calc(100vh-70px)]'>
        <div className='flex flex-col items-center justify-center w-full h-full gap-4'>
            <Spinner label="Loading..." />
        </div>
    </div>
  )
}
