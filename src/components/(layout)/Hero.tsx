"use client"

import Image from 'next/image'
import heroBanner from '../../../public/assets/hero-icon.svg'

export default function Hero() {
    return (
        <section className='flex flex-col'>
            <div className="relative w-auto h-[450px]">
                <Image src={heroBanner} fill objectFit='cover' alt='image of a banner' /> {/* gumana kahit walang width, height? */}
            </div>
            <div className="absolute mt-48 m-10 md:ml-28">
                <h1 className='text-[2rem] font-bold'>Unlock the Future: Collect, Create,</h1>
                <h1 className='text-[2rem] font-bold'>and Conquer with NFTs!</h1>
                <button className='mt-6 bg-white bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-90 
                px-10 py-3 rounded-xl'>Discover</button>
            </div>
        </section>
    )
}