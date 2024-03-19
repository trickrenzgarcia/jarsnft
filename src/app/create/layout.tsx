import React from 'react'
import CreateNavbar from './_components/CreateNavbar'

type CreateLayoutProps = {
    children: React.ReactNode
}

export default function CreateLayout({ children }: CreateLayoutProps) {
  return (
    <main className='flex-1'>
        <CreateNavbar />
        <div className='container'>
          {children}
        </div>
    </main>
  )
}
