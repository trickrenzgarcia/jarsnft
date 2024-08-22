import { cn } from '@/utils/cn'
import Link from 'next/link'
import React from 'react'

export default function AdminNavbar({ className, ...props}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
    className={cn("flex items-center space-x-4 lg:space-x-6", className)}
    {...props}
  >
    <Link
      href="/admin"
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      Dashboard
    </Link>
    <Link
      href="/admin/users-overview"
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Users Overview
    </Link>
    <Link
      href="/admin/transactions"
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Transaction History
    </Link>
    <Link
      href="/admin/"
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
    >
      Settings
    </Link>

    </nav>
  )
}
