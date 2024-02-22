"use client"

import Link from 'next/link';

export default function LearnNavbar() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <Link href='/learn'>
          <h1 className='text-3xl'>Learn</h1>
        </Link>
      </div>
    </header>
  )
}