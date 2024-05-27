"use client";

import Link from "next/link";
import { poppins } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import { MouseEvent, useState } from "react";
import { leftNavList } from "../_metadata";
import { cn } from "@nextui-org/react";
import { Capitalize } from "./SideNavLeft";
import { PageNavbarTitle } from ".";
import React from "react";

export default function SideBarHamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <div className="flex lg:hidden">
      {isOpen === false ? (
        <div className="fixed top-auto z-40 -mt-1 flex w-full items-center gap-3 border-b border-[#4232417c] bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
          <div className="ml-5">
            <button className="text-2xl" onClick={handleClick}>
              &#9776;
            </button>
          </div>
          <PageNavbarTitle />
        </div>
      ) : (
        <>
          <section className="fixed inset-0 z-50 overflow-y-auto lg:hidden">
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"></div>
            <div className="absolute flex w-80 max-w-[calc(100%-3rem)] flex-col justify-center bg-background p-4">
              <button className="self-end pr-2 text-4xl" onClick={handleClick}>
                &times;
              </button>
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
            </div>
          </section>
        </>
      )}
    </div>
  );
}
