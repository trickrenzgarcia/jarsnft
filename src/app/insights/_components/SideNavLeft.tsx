"use client";

import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { leftNavList } from "../_metadata";

export default function SideNavLeft() {
  const path = usePathname();

  return (
    <aside className='pt-9 z-30 ml-3 hidden border-r border-gray-300 h-[100vh] right-auto w-[16.5rem] shrink-0 md:sticky md:block overflow-y-hidden hover:overflow-y-auto '>
      <div>
        <div className={cn(poppins.className)}>
          {leftNavList.map(item => (
            <div className="mb-9 text-sm" key={item.topic}>
              <h1 className="font-semibold">{item.topic}</h1>
              <ul className='mt-4 border-l border-[#252525]' key={item.topic}>
                {item.child.map(child => (
                  <li key={child.name} className={cn("mb-3 font-semibold text-white block border-l pl-4 -ml-px border-transparent ", path === child.href && " text-[#c44ef0] border-l-[#c44ef0] font-bold",
                    path !== child.href && "dark:hover:border-[#cc64f1] dark:text-[#A519D7] text-[#692b80] dark:hover:text-[#cc64f1]")}>
                    <Link href={child.href}>{Capitalize(child.name)}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

const Capitalize = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};