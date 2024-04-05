"use client";

import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { leftNavList } from "../_metadata";
import { leftNewList } from "../_metadata";

export default function SideNavLeft() {
  const path = usePathname();

  return (
    <aside className='fixed pt-9 z-30 -ml-2 hidden border-r border-gray-300 h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-scroll scrollbar-hide'>
      <div className={cn(poppins.className)}>
            {leftNewList.map(item => (
            <div className="mb-4" key={item.topic}>      
              <h1 className="font-semibold">{item.topic}</h1>
              <ul className='flex flex-col mt-4 ml-5' key={item.topic}>
                {item.child.map(child => (
                  <li key={child.name} className={cn("mb-3 font-semibold block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300", path === child.href && "font-bold",
                  path !== child.href && "hover:underline")}>
                    <Link href={child.href}>{child.name}</Link>
                  </li>     
                ))}
              </ul>
            </div>
            ))}
      </div>
    </aside>
  );
}
