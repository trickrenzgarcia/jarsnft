"use client"

import Image from "next/image"
import Link from 'next/link'
import {
  ConnectWallet,
  useLogin,
  useContract,
  useLogout,
  useUser,
  useAddress
} from "@thirdweb-dev/react"
import { useTheme } from 'next-themes'

export default function Navbar() {
  const nextTheme = useTheme()

  return (
    <nav className="w-full h-[70px] px-[1.2rem] py-[0.8rem] flex justify-between fixed z-50 top-0 left-0 dark:bg-gray-900 bg-opacity-100 backdrop-blur-2xl">
      <div className="flex flex-row justify-between items-center w-full max-w-screen-2xl mx-auto">

        {/* Left-side  */}
        <div className='flex items-center'>
          
          <div className=''>
            <Link href='/'>
              <h1 className='font-extrabold text-2xl'>Jarsnft</h1>
            </Link>
            
          </div>
          
          <div className='hidden lg:flex'>
            <Link href='/create' className='px-3 font-semibold hover:text-zinc-500 cursor-pointer'>Create</Link>
            <Link href="/collection" className='px-3 font-semibold hover:text-zinc-500 cursor-pointer'>Collections</Link>
            <Link href="/trade" className='px-3 font-semibold hover:text-zinc-500 cursor-pointer'>Trade</Link>
            <Link href="/coin" className='px-3 font-semibold hover:text-zinc-500 cursor-pointer'>Coin Analytics</Link>
            <Link href='/news' className='px-3 font-semibold hover:text-zinc-500 cursor-pointer'>News</Link>
            <Link href="/learn" className='px-3 font-semibold hover:text-zinc-500 cursor-pointer'>Learn</Link>
          </div>
        </div>

        <div>
          <ConnectWallet 
            hideTestnetFaucet
            switchToActiveChain
            theme={nextTheme.theme}
          />
        </div>
        
      </div>
    </nav>
  )
}