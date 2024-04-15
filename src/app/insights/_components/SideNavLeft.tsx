"use client";

import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { leftNavList } from "../_metadata";

export default function SideNavLeft() {
  const path = usePathname();

  return (
    <aside className="fixed right-auto z-30 ml-3 hidden min-h-screen w-[16.5rem] shrink-0 overflow-y-scroll border-r border-gray-300 pt-9 scrollbar-hide md:sticky md:block">
      <div className={cn(poppins.className)}>
        {leftNavList.map((item) => (
          <div className="mb-9 text-sm" key={item.topic}>
            <h1 className="font-semibold">{item.topic}</h1>
            <ul className="mt-4 border-l border-[#252525]" key={item.topic}>
              {item.child.map((child) => (
                <li
                  key={child.name}
                  className={cn(
                    "-ml-px mb-3 block border-l border-transparent pl-4 font-semibold text-white ",
                    path === child.href &&
                      " border-l-[#c44ef0] font-bold text-[#c44ef0]",
                    path !== child.href &&
                      "text-[#692b80] dark:text-[#A519D7] dark:hover:border-[#cc64f1] dark:hover:text-[#cc64f1]",
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
