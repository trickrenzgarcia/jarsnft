"use client";

import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { leftNavList } from "../_metadata";
import { IoHome } from "react-icons/io5";
import { RiNftFill } from "react-icons/ri";
import { SiBitcoinsv } from "react-icons/si";

export default function SideNavLeft() {
  const path = usePathname();

  return (
    <aside className="sticky right-auto top-16 z-30 hidden h-[93vh] w-[15.5rem] shrink-0 overflow-y-auto border-r border-gray-600 pt-9 lg:ml-5 lg:block">
      <div className="my-2 mb-4 flex flex-col justify-between text-[#63666e] dark:text-[#91949c]">
        <Link href="/">
          <div className="mb-2 flex items-center gap-5 text-lg font-bold dark:hover:text-[#f0f0f0] hover:text-[#0f0f0f]">
            <IoHome />
            <h4>Home</h4>
          </div>
        </Link>
        <Link href="/collections">
          <div className="mb-2 flex items-center gap-5 text-lg font-bold dark:hover:text-[#f0f0f0] hover:text-[#0f0f0f]">
            <RiNftFill />
            <h4>NFT Collections</h4>
          </div>
        </Link>
        <Link href="/coins">
          <div className="mb-2 flex items-center gap-5 text-lg font-bold dark:hover:text-[#f0f0f0] hover:text-[#0f0f0f]">
            <SiBitcoinsv />
            <h4>Coin Analytics</h4>
          </div>
        </Link>
      </div>
      <div className={cn(poppins.className)}>
        {leftNavList.map((item) => (
          <div className="mb-9" key={item.topic}>
            <h1 className="font-semibold text-[#c117ff]">{item.topic}</h1>
            <ul className="mt-4 border-l border-[#424242]" key={item.topic}>
              {item.child.map((child) => (
                <li
                  key={child.name}
                  className={cn(
                    "-ml-px mb-3 block border-l border-transparent pl-4 text-sm font-semibold",
                    path === child.href &&
                      " border-l-[#090c0f] font-bold text-[#0f0f0f] dark:border-l-[#f0f0f0] dark:text-[#f0f0f0]",
                    path !== child.href &&
                      "text-[#585858] hover:border-l-[#151c25] hover:text-[#090c0f] dark:text-[#b4b4b4] dark:hover:border-[#ffffff] dark:hover:text-[#ffffff]",
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
  );
}

export const Capitalize = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
