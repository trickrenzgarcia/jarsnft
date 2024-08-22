import { Footer, Navbar } from '@/components/(layout)'
import React from 'react'

export default function CategoryLayout({ 
  children }: { children: React.ReactNode }) 
{
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
