"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className='flex flex-col'>
            <div className='relative w-full h-96 overflow-hidden'>
                <Image src="/assets/hero-icon.svg" fill objectFit='cover' alt='image of a banner' />
            </div>
            <div className="absolute p-8 mt-20 ml-28 z-10 bg-white/85 dark:bg-black/85 rounded-xl">
                <h1 className='text-[2rem] font-bold'>Unlock the Future: Collect, Create,</h1>
                <h1 className='text-[2rem] font-bold'>and Conquer with NFTs!</h1>
                <Link className='block text-lg mt-8 hover:text-purple-600 transition-colors' href='#'>Discover ►</Link>
            </div>
        </section>
    )
}