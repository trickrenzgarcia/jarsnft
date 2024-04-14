"use client"

import Link from "next/link"
import { useUserContext } from "../(providers)"

export default function AdminAccessLink() {
const { user, isLoading, isLoggedIn } = useUserContext()

    if(isLoading || !isLoggedIn) return null

    if(user.data.session.role !== "admin") return null
    
  return (
    <nav className="bg-purple-800 w-full">
        <div className="container flex justify-center gap-1 w-full text-sm py-1 text-white">
            <h3>This user wallet is Admin.</h3>
            <Link href="/admin" className="underline text-blue-400 hover:text-blue-300">View admin page</Link>
        </div>
    </nav>
  )
}
