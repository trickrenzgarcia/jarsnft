"use client";

import { Link } from "react-scroll";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import { rightNavList } from "../_metadata";
import { cn } from "@nextui-org/react";
// import { Item } from "@radix-ui/react-dropdown-menu";

export default function SideNavRight() {
  const path = usePathname();
  const [item] = rightNavList.filter((item) => item.href === path);
  return (
    <div className="ml-3 hidden text-sm xl:block">
      <div className="sticky top-16 -mt-4 pt-8">
        <div className="relative overflow-hidden pb-10">
          <h1 className="font-bold text-[#c117ff]">On This Page</h1>
          <div className="mt-4 h-full w-full rounded-[inherit]">
            <ul className="text-[#696c72] dark:text-[#c0c0c0]">
              {item.anchors.map((val) => (
                <Link
                  activeClass="font-bold text-[#151c25] dark:text-[#f0f0f0] "
                  to={val.anchor}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  key={val.anchor}
                >
                  <li
                    className={cn(
                      "cursor-pointer px-5 py-2 hover:border-l-3 hover:border-l-[#151c25] hover:bg-[#d257ff56] hover:text-[#151c25] dark:hover:border-[#A519D7] dark:hover:text-[#f0f0f0]",
                    )}
                  >
                    {val.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
