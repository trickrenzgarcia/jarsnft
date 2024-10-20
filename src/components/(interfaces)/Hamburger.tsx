"use client";

import Link from "next/link";
import { MouseEvent, useState } from "react";
import SearchInput from "./SearchInput";
import JarsLogo from "./JarsLogo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MdAnalytics } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { IoCreate } from "react-icons/io5";
import { MdCollections } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { LuWallet } from "react-icons/lu";
import ProfileListButton, { ProfileHamburger } from "./ProfileButton";

export default function Hamburger() {
  // const [isOpen, setIsOpen] = useState(false);

  // function handleClick(e: MouseEvent<HTMLButtonElement>) {
  //   e.preventDefault();
  //   isOpen === false ? setIsOpen(true) : setIsOpen(false);
  // }

  return (
    <div className="block lg:hidden">
      {/* <div className="flex z-10 lg:hidden">
        {isOpen === false ? (
          <button className="text-2xl" onClick={handleClick}>
            &#9776;
          </button>
        ) : (
          <section className="absolute left-0 top-0 flex flex-col justify-center bg-background p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-end mb-4">
                <JarsLogo />
                <h1 className="animate-flip-down animate-once animate-duration-[1200ms] animate-ease-in mb-2 text-xl font-bold">Jars</h1>
              </div>
              <button className="self-end pr-2 mt-4 mb-8 text-4xl" onClick={handleClick}>
                &times;
              </button>
            </div>
            <SearchInput />
            <nav className="flex min-h-screen flex-col items-center py-5">
              <Link
                href="/"
                className="w-full py-5 ml-4 border-gray-900 border-b-1 text-xl hover:opacity-90"
              >
                Home
              </Link>
              <Link
                href="/create"
                className="w-full py-5 ml-4 border-gray-900 border-b-1 text-xl hover:opacity-90"
              >
                Create
              </Link>
              <Link
                href="/collection"
                className="w-full py-5 ml-4 border-gray-900 border-b-1 text-xl hover:opacity-90"
              >
                Collections
              </Link>
              <Link
                href="/coins"
                className="w-full py-5 ml-4 border-gray-900 border-b-1 text-xl hover:opacity-90"
              >
                Coin Analytics
              </Link>
              <Link
                href="/insights"
                className="w-full py-5 ml-4 border-gray-900 border-b-1 text-xl hover:opacity-90"
              >
                Insights
              </Link>
            </nav>
          </section>
        )}
      </div> */}
      <Sheet>
        <SheetTrigger className="text-2xl">&#9776;</SheetTrigger>
        <SheetContent side="left">
          <section className="absolute left-0 top-0 flex flex-col justify-center bg-background p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-end mb-4">
                <JarsLogo />
                <h1 className="animate-flip-down animate-once animate-duration-[1200ms] animate-ease-in mb-2 text-xl font-bold">Jars</h1>
              </div>
              {/* <button className="self-end pr-2 mt-4 mb-8 text-4xl" onClick={handleClick}>
                &times;
              </button> */}
            </div>
            <ProfileHamburger />

            {/* <SearchInput /> */}
            <nav className="flex min-h-screen flex-col text-[#dddddd] items-center py-4">
              <Link
                href="/"
                className="w-full py-5 md:py-6 ml-4 hover:opacity-90"
              >
                <div className="flex border-[#A519D7] border-l-1 items-center gap-2">
                  <IoHomeSharp className="text-2xl ml-3" />
                  <span className="text-lg">
                    Home
                  </span>
                </div>
              </Link>
              <Link
                href="/create"
                className="w-full py-5 md:py-6 ml-4 hover:opacity-90"
              >
                <div className="flex border-[#A519D7] border-l-1 items-center gap-2">
                  <IoCreate className="text-2xl ml-3" />
                  <span className="text-lg">
                    Create
                  </span>
                </div>
              </Link>
              <Link
                href="/collections"
                className="w-full py-5 md:py-6 ml-4 hover:opacity-90"
              >
                <div className="flex border-[#A519D7] border-l-1 items-center gap-2">
                  <MdCollections className="text-2xl ml-3" />
                  <span className="text-lg">
                    Collections
                  </span>
                </div>
              </Link>
              <Link
                href="/coins"
                className="w-full py-5 md:py-6 ml-4 hover:opacity-90"
              >
                <div className="flex border-[#A519D7] border-l-1 items-center gap-2">
                  <MdAnalytics className="text-2xl ml-3" />
                  <span className="text-lg">
                    Coin Analytics
                  </span>
                </div>
              </Link>
              <Link
                href="/insights"
                className="w-full py-5 md:py-6 ml-4 hover:opacity-90"
              >
                <div className="flex border-[#A519D7] border-l-1 items-center gap-2">
                  <FaLightbulb className="text-2xl ml-3" />
                  <span className="text-lg">
                    Insights
                  </span>
                </div>
              </Link>
            </nav>
          </section>
          {/* <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader> */}
        </SheetContent>
      </Sheet>
    </div>
  );
}
