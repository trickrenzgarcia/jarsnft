import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Hamburger, JarsLogo, Login, SearchInput } from "@/components/(interfaces)";
import React from "react";
import HeroMessage from "../(interfaces)/HeroMessage";
import { ImSearch } from "react-icons/im";


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      {/* Nav Container */}
      <div className="flex w-full justify-between items-center gap-2 px-5 py-4 md:px-10">
        {/* Left-side <NavigationComponent> */}
        <div className="flex items-center gap-4">
            <Hamburger />
            <Link href="/">
              <div className="flex mb-2 items-end">
                <JarsLogo />
                <h1 className="animate-flip-down animate-once animate-duration-[1200ms] animate-ease-in mb-2 text-xl font-bold">Jars</h1>
              </div>
            </Link>

          <Separator className="w-[2px] h-[30px] hidden lg:block bg-gray-200 dark:bg-gray-600" orientation="vertical" />

          <div className="hidden gap-1 lg:flex xl:mr-5">
            <Link
              href="/create"
              className="animate-fade-right animate-once animate-duration-[1200ms] animate-ease-linear cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Create
            </Link>
            <Link
              href="/collections"
              className="animate-fade-right animate-once animate-duration-[1200ms] animate-ease-linear cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Collections
            </Link>
            <Link
              href="/coins"
              className="animate-fade-right animate-once animate-duration-[1200ms] animate-ease-linear cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Analytics
            </Link>
            <Link
              href="/insights"
              className="animate-fade-right animate-once animate-duration-[1200ms] animate-ease-linear cursor-pointer px-3 font-semibold hover:text-zinc-500"
            >
              Insights
            </Link>
          </div>
        </div>

        {/* Middle <SearchBarComponent> */}
        <div className="hidden xl:flex items-center justify-center">
          <div className="flex items-center justify-center max-w-md w-[448px] h-full min-w-96">
            <SearchInput />
          </div>
        </div>
       

        {/* Right-side <UserNavigationComponent>*/}
        <div className="flex items-center gap-6">
          <div className="xl:hidden text-2xl">
            <ImSearch />
          </div>
          <Login />
        </div>
      </div>

      {/* <AdminAccessLink /> */}
      <HeroMessage />
    </nav>
  )
}
