import { getUser } from '@/app/api/auth/[...thirdweb]/twAuth'
import { AuthUser } from '@/types/users'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'
import AdminMenuToggle from './_components/admin-menu'
import { Metadata } from 'next'
import { AdminSidebar } from './_components/admin-sidebar'
import { MarketPlaceProvider } from '@/components/(providers)'

export async function generateMetadata(): Promise<Metadata>{
  const user = (await getUser()) as AuthUser

  if(!user || !user.session) {
    return {
      title: 'JarsNFT | Page Not Found',
    }
  }

  if(user.session.role !== 'admin') {
    return {
      title: 'JarsNFT | Page Not Found',
    }
  }

  return {
    title: 'JarsNFT | Admin Dashboard',
  }
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = (await getUser()) as AuthUser

  if(!user || !user.session) {
    notFound()
  }

  if(user.session.role !== 'admin') {
    notFound()
  }

  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto p-8 bg-[#FAFAFA] dark:bg-[#212121]">
        <MarketPlaceProvider>
          {children}
        </MarketPlaceProvider>
      </main>
    </div>
  )
}
