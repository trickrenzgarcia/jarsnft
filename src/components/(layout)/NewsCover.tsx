"use client"

import Image from 'next/image'

export default function NewsCover() {
    return (
        <section className='flex flex-col'>
            <div className="relative w-auto h-[60px]">
                <Image src="/assets/newsBackground.jpg" fill style={{
                    objectFit: "cover"
                }} alt='image of a banner' /> {/* gumana kahit walang width, height? */}
            </div>
        </section>
    )
}