"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, FileText, Users, Settings, LogOut } from 'lucide-react'
import Image from 'next/image'
import { useLogout } from '@thirdweb-dev/react'

const sidebarItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
]

export function AdminSidebar() {
  const router = useRouter()
  const { logout } = useLogout()
  const pathname = usePathname()

  const handleLogout = async () => {
    logout()
    router.push('/')
  }

  return (
    <div className="hidden border-r lg:block bg-[#F3F3F3] dark:bg-[#272727] transition-colors">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center px-8">
          <Link className="flex items-center font-semibold" href="/">
            <Image src='/assets/Jarsu.png' alt='Admin Logo' width={60} height={60} />
            <span className="text-2xl">JarsNFT Admin</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 overflow-auto">
          <nav className="grid items-start pr-5 text-sm font-medium">
            {sidebarItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "bg-purple-300/70 dark:bg-[#404040] border-black flex items-center gap-3 rounded-r-2xl shadow-[rgba(0,0,15,1)_0px_6px_0px_0px] px-6 py-5 transition-all hover:text-gray-900")}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </ScrollArea>
        <div className="mt-auto p-4">
          <Button variant="ghost" onClick={handleLogout} className="w-full text-2xl hover:text-red-600 justify-center gap-4">
            <LogOut className="text-2xl" />
            Log out
          </Button>
        </div>
      </div>
    </div>
  )
}
