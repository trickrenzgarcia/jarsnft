"use client";

import Link from "next/link";
import { poppins } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { leftNavList } from "../_metadata";
import { cn } from "@nextui-org/react";
import { Capitalize } from "./SideNavLeft";
import { PageNavbarTitle } from ".";
import React from "react";
import { IoHome } from "react-icons/io5";
import { RiNftFill } from "react-icons/ri";
import { SiBitcoinsv } from "react-icons/si";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function SideBarHamburger() {
  const path = usePathname();
  
  return (
    <div className="flex lg:hidden">
      <Sheet>
        <div className="fixed top-auto z-40 -mt-1 flex w-full items-center gap-3 border-b border-[#4232417c] bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
           <div className="ml-5">
             {/* <button className="text-2xl" onClick={handleClick}>
              </button>  */}
              <SheetTrigger>
                &#9776;
              </SheetTrigger>
           </div>
           <PageNavbarTitle />
        </div>
        <SheetContent side="left" className="overflow-auto">
          <div className="mt-4 flex flex-row items-end justify-between">
            <h1 className=" ml-4 text-2xl font-semibold tracking-wide text-[#A519D7]">
              Navigate
            </h1>
            {/* This button should be the one that closes the sheet
            <button
              className="self-end pr-2 text-3xl dark:hover:text-[#f0f0f0]"
              onClick={handleClick}
            >
              &times;
            </button> */}
          </div>
          <div className="my-4 ml-4 flex flex-col justify-between text-[#91949c]">
            <Link href="/">
              <div className="mb-4 flex items-center gap-5 text-lg font-bold dark:hover:text-[#f0f0f0]">
                <IoHome />
                <h4>Home</h4>
              </div>
            </Link>
            <Link href="/collections">
              <div className="mb-4 flex items-center gap-5 text-lg font-bold dark:hover:text-[#f0f0f0]">
                <RiNftFill />
                <h4>NFT Collections</h4>
              </div>
            </Link>
            <Link href="/coins">
              <div className="mb-4 flex items-center gap-5 text-lg font-bold dark:hover:text-[#f0f0f0]">
                <SiBitcoinsv />
                <h4>Coin Analytics</h4>
              </div>
            </Link>
          </div>
          <div className={cn(poppins.className)}>
            <div className="ml-4 ">
              {leftNavList.map((item) => (
                <div className="mb-9" key={item.topic}>
                  <h1 className="font-semibold text-[#A519D7]">
                    {item.topic}
                  </h1>
                  <ul
                    className="mt-4 border-l border-[#a5aab3]"
                    key={item.topic}
                  >
                    {item.child.map((child) => (
                      <li
                        key={child.name}
                        className={cn(
                          "-ml-px mb-5 block border-l border-transparent pl-4 text-sm font-semibold text-[#91949c] ",
                          path === child.href &&
                            " border-l-[#151c25] font-bold text-[#151c25] dark:border-l-[#f0f0f0] dark:text-[#f0f0f0]",
                          path !== child.href &&
                            "text-[#696c72] hover:border-l-[#151c25] hover:text-[#151c25] dark:text-[#a0a0a0] dark:hover:border-[#f0f0f0] dark:hover:text-[#f0f0f0]",
                        )}
                      >
                        <Link href={child.href}>
                          {Capitalize(child.name)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
        
    </div>
    // <div className="flex lg:hidden">
    //   {isOpen === false ? (
    //     <div className="fixed top-auto z-40 -mt-1 flex w-full items-center gap-3 border-b border-[#4232417c] bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
    //       <div className="ml-5">
    //         <button className="text-2xl" onClick={handleClick}>
    //           &#9776;
    //         </button>
    //       </div>
    //       <PageNavbarTitle />
    //     </div>
    //   ) : (
    //     <>
    //       <section className="fixed inset-0 z-50 overflow-y-auto lg:hidden">
    //         <div
    //           className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-zinc-900/80"
    //           onClick={() => setIsOpen(false)}
    //         ></div>
    //         <div className="absolute flex w-80 max-w-[calc(100%-3rem)] flex-col bg-background p-4">
    //           <div className="mt-4 flex flex-row items-end justify-between">
    //             <h1 className=" ml-4 text-2xl font-semibold tracking-wide text-[#A519D7]">
    //               Navigate
    //             </h1>
    //             <button
    //               className="self-end pr-2 text-3xl dark:hover:text-[#f0f0f0]"
    //               onClick={handleClick}
    //             >
    //               &times;
    //             </button>
    //           </div>
    //           <div className="my-4 ml-4 flex flex-col justify-between text-[#91949c]">
    //             <Link href="/">
    //               <div className="mb-4 flex items-center gap-5 text-lg font-bold dark:hover:text-[#f0f0f0]">
    //                 <IoHome />
    //                 <h4>Home</h4>
    //               </div>
    //             </Link>
    //             <Link href="/collections">
    //               <div className="mb-4 flex items-center gap-5 text-lg font-bold dark:hover:text-[#f0f0f0]">
    //                 <RiNftFill />
    //                 <h4>NFT Collections</h4>
    //               </div>
    //             </Link>
    //             <Link href="/coins">
    //               <div className="mb-4 flex items-center gap-5 text-lg font-bold dark:hover:text-[#f0f0f0]">
    //                 <SiBitcoinsv />
    //                 <h4>Coin Analytics</h4>
    //               </div>
    //             </Link>
    //           </div>
    //           <div className={cn(poppins.className)}>
    //             <div className="ml-4 ">
    //               {leftNavList.map((item) => (
    //                 <div className="mb-9" key={item.topic}>
    //                   <h1 className="font-semibold text-[#A519D7]">
    //                     {item.topic}
    //                   </h1>
    //                   <ul
    //                     className="mt-4 border-l border-[#a5aab3]"
    //                     key={item.topic}
    //                   >
    //                     {item.child.map((child) => (
    //                       <li
    //                         key={child.name}
    //                         className={cn(
    //                           "-ml-px mb-5 block border-l border-transparent pl-4 text-sm font-semibold text-[#91949c] ",
    //                           path === child.href &&
    //                             " border-l-[#151c25] font-bold text-[#151c25] dark:border-l-[#f0f0f0] dark:text-[#f0f0f0]",
    //                           path !== child.href &&
    //                             "text-[#696c72] hover:border-l-[#151c25] hover:text-[#151c25] dark:text-[#a0a0a0] dark:hover:border-[#f0f0f0] dark:hover:text-[#f0f0f0]",
    //                         )}
    //                       >
    //                         <Link href={child.href}>
    //                           {Capitalize(child.name)}
    //                         </Link>
    //                       </li>
    //                     ))}
    //                   </ul>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     </>
    //   )}
    // </div>
  );
}
