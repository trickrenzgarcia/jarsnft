"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { rightNavList } from '../_metadata'
import { cn } from '@/lib/utils'



export default function SideNavRight() {
  const path = usePathname()
  const [item] = rightNavList.filter(item => item.href === path)
  console.log(item.href)
  return (
    <div className='hidden text-sm xl:block'>
      <div className="sticky top-16 -mt-10 pt-5">
        <div className='relative overflow-hidden pb-10'>
          <div className='h-full w-full rounded-[inherit]'>
            {item.anchors.map(val => (
              <div key={val.anchor} className='px-3 py-2 border-l-3'>
                <Link href={`${item.href}/${val.anchor}`}>{val.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}