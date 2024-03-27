"use client"

import { poppins } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { leftNavList } from '../_metadata'

export default function SideNavLeft() {
  const path = usePathname()

  return (
    <aside className='fixed pt-9 z-30 -ml-2 hidden border-r border-gray-300 h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-scroll scrollbar-hide'>
      <div className={cn(poppins.className)}>
          <ul className='flex flex-col'>
            {leftNavList.map(item => (      
              <li key={item.name} className={cn("mb-3", path === item.href && "font-bold",
              path !== item.href && "hover:underline")}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
      </div>
    </aside>
  )
}

