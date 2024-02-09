"use client"

import Image from 'next/image'

export default function Hero() {
    return (
        <div className='flex flex-col'>
            <Image src="@/public/assets/hero-icon.svg" width={1440} height={500} sizes='100vw' style={{ width: '100%', height: 'auto' }} alt='' />
            <h1>Ayaw gumana ng image sa hero.tsx</h1>
        </div>
    )
}