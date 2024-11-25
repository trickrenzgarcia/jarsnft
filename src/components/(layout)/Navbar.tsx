"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Hamburger, JarsLogo, Login, SearchInput } from "@/components/(interfaces)";
import React, { useState } from "react";
import HeroMessage from "../(interfaces)/HeroMessage";
import { ImSearch } from "react-icons/im";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const linkStyle = () => {
    return "animate-once animate-duration-[1200ms] animate-ease-linear animate-fade-right cursor-pointer px-3 font-semibold hover:text-violet-500 subpixel-antialiased";
  };

  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <>
      <div className={cn(!isSearchOpen && "hidden", "sticky top-0 z-50 w-full bg-background/80 px-4 py-[30px] backdrop-blur-md")}>
        <SearchInput handleClick={handleSearchClick} />
      </div>

      <nav className={cn(isSearchOpen && "hidden", "sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md")}>
        <div className="flex w-full items-center justify-between gap-2 px-5 py-4 max-[415px]:py-2 md:px-10">
          <div className="flex items-center gap-4">
            <Hamburger />
            <Link href="/">
              <div className="mb-2 flex items-end">
                <JarsLogo />
                <h1 className="animate-once animate-duration-[1200ms] animate-ease-in mb-2 hidden animate-flip-down text-xl font-bold antialiased sm:block">
                  Jars
                </h1>
              </div>
            </Link>

            <Separator className="hidden h-[30px] w-[2px] bg-gray-200 dark:bg-gray-600 lg:block" orientation="vertical" />

            <div className="hidden gap-1 lg:flex xl:mr-5">
              <Link href="/create" className={linkStyle()}>
                Create
              </Link>
              <Link href="/collections" className={linkStyle()}>
                Collections
              </Link>
              <Link href="/coins" className={linkStyle()}>
                Analytics
              </Link>
              <Link href="/insights" className={linkStyle()}>
                Insights
              </Link>
            </div>
          </div>

          <div className="hidden items-center justify-center xl:flex">
            <div className="flex h-full w-[448px] min-w-96 max-w-md items-center justify-center">
              <SearchInput handleClick={handleSearchClick} />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={handleSearchClick} className="cursor-pointer text-2xl xl:hidden">
              <ImSearch />
            </button>
            <div className='flex'>
              <Login />
            </div>
          </div>
        </div>

        <HeroMessage />
      </nav>
    </>
  );
}
