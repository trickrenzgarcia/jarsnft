import Image from "next/image";
import { AdminNavbar, AdminProfileNav, SwitchModeClient } from "./_components";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
        {/* Admin Navbar */}
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <Image src="/assets/Jarsu.png" width={50} height={50} alt="jars" />
                <h1 className="font-bold">JarsAdmin</h1>
                <AdminNavbar className="mx-6 hidden md:flex" />
                <div className="ml-auto flex items-center space-x-4">
                    <SwitchModeClient />
                    <AdminProfileNav />
                </div>
            </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
            {children}
        </div>
    </div>
  )
}
