"use client"

import Image from 'next/image'
import heroBanner from '../../../public/assets/hero-icon.svg'

export default function Hero() {
    return (
        <div className='flex flex-col'>
            <Image src={heroBanner} alt='' /> {/* gumana kahit walang width, height? */}
        </div>
    )
}