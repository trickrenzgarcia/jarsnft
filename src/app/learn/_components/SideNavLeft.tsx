"use client";

import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { leftNavList } from "../_metadata";

export default function SideNavLeft() {
  const path = usePathname();

  return (
    <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-scroll border-r-2 scrollbar-hide md:sticky md:block">
      <div className={cn(poppins.className)}>
        <ul className="flex flex-col">
          {leftNavList.map((item) => (
            <li
              key={item.name}
              className={cn(
                "mb-3",
                path === item.href && "font-bold",
                path !== item.href && "hover:underline",
              )}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
