"use client";

import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { leftNavList } from "../_metadata";

export default function SideNavLeft() {
  const path = usePathname();

  return (
    
    <aside className="pt-9 z-30 ml-3 hidden border-r border-gray-400 h-[100vh] right-auto w-[16.5rem] shrink-0 sticky top-16 md:block overflow-y-hidden hover:overflow-y-auto">
      <div className={cn(poppins.className)}>
        {leftNavList.map((item) => (
          <div className="mb-9" key={item.topic}>
            <h1 className="font-semibold text-[#A519D7]">{item.topic}</h1>
            <ul className="mt-4 border-l border-[#a5aab3]" key={item.topic}>
              {item.child.map((child) => (
                <li
                  key={child.name}
                  className={cn(
                    "-ml-px mb-3 block border-l border-transparent pl-4 font-semibold text-[#91949c] dark:text-white text-sm ",
                    path === child.href &&
                      " font-bold text-[#151c25] border-l-[#151c25] dark:border-l-[#f0f0f0] dark:text-[#f0f0f0]",
                    path !== child.href &&
                      "text-[#696c72] hover:text-[#151c25] hover:border-l-[#151c25] dark:text-[#a0a0a0] dark:hover:border-[#f0f0f0] dark:hover:text-[#f0f0f0]",
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

const Capitalize = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
