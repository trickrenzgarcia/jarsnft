"use client"

import Link from "next/link";
import { Login, Hamburger } from "@/components/(interfaces)";
import AdminAccessLink from "./AdminAccessLink";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b-1 border-slate-800 bg-background/80 
    px-0 backdrop-blur-md"
    >
      {/* Nav Container */}
      <div className="container flex w-full justify-between py-4">
        {/* Left-side  */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-end">
              <Image src="/jars_transparent.png" width={50} height={50} alt="jars" className={cn(theme === "dark" && "invert")}/>
              <h1 className="font-bold text-xl mb-2">JarsNFT</h1>
            </div>
          </Link>
          

          <div className="ml-36 hidden gap-1 lg:flex xl:mr-5">
            <Link
              href="/create"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Create
            </Link>
            <Link
              href="/collections"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Collections
            </Link>
            <Link
              href="/trade"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Trade
            </Link>
            <Link
              href="/coins"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Coin Analytics
            </Link>
            <Link
              href="/insights"
              className="cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Insights
            </Link>
          </div>
        </div>

        {/* Right-side */}
        <div className="flex items-center gap-4">
          <Login />
          <Hamburger />
        </div>
      </div>

      {/* Admin Access */}
      <AdminAccessLink />
    </nav>
  );
}
