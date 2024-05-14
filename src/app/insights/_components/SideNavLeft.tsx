"use client";

import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { leftNavList } from "../_metadata";
import { MouseEvent, useState } from "react";
import { SlArrowRight } from "react-icons/sl";

export default function SideNavLeft() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  }

  return (
    <>
      {isOpen === true ? (
        <button
          className="sticky z-30 flex h-full flex-col content-center bg-black text-3xl"
          onClick={handleClick}
        >
          &#9776;
          <SlArrowRight />
        </button>
      ) : (
        <aside className="sticky right-auto top-16 z-30 hidden h-[93vh] w-[15.5rem] shrink-0 overflow-y-hidden border-r border-gray-400 pt-9 hover:overflow-y-auto lg:ml-3 lg:block">
          <div className={cn(poppins.className)}>
            {leftNavList.map((item) => (
              <div className="mb-9" key={item.topic}>
                <h1 className="font-semibold text-[#A519D7]">{item.topic}</h1>
                <ul className="mt-4 border-l border-[#a5aab3]" key={item.topic}>
                  {item.child.map((child) => (
                    <li
                      key={child.name}
                      className={cn(
                        "-ml-px mb-3 block border-l border-transparent pl-4 text-sm font-semibold text-[#91949c] dark:text-white ",
                        path === child.href &&
                          " border-l-[#151c25] font-bold text-[#151c25] dark:border-l-[#f0f0f0] dark:text-[#f0f0f0]",
                        path !== child.href &&
                          "text-[#696c72] hover:border-l-[#151c25] hover:text-[#151c25] dark:text-[#a0a0a0] dark:hover:border-[#f0f0f0] dark:hover:text-[#f0f0f0]",
                      )}
                    >
                      <Link href={child.href}>{Capitalize(child.name)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      )}
    </>
  );
}

const Capitalize = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
