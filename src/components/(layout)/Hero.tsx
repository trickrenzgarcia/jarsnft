"use client"

import Image from 'next/image'
import heroBanner from '../../../public/assets/hero-icon.svg'

export default function Hero() {
    return (
        <div className='flex flex-col'>
            <Image src={heroBanner} width={1440} height={500} sizes='100vw' style={{ width: '100%', height: 'auto' }} alt='' />
        </div>
    )
}