"use client";

import {Link} from "react-scroll";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import { rightNavList } from "../_metadata";
import { cn } from "@nextui-org/react";
import { Item } from "@radix-ui/react-dropdown-menu";


export default function SideNavRight() {
  const path = usePathname();
  const [item] = rightNavList.filter((item) => item.href === path);
  console.log(item.href);
  return (
    <div className="hidden text-sm xl:block">
      <div className="sticky top-16 -mt-4 pt-5">
        <div className="relative overflow-hidden pb-10">
          <h1 className="font-semibold">On This Page</h1>
          <div className="mt-4 h-full w-full rounded-[inherit]">
            {item.anchors.map((val) => (
              // make anchors in page respond to anchors
              <div  
                  key={val.anchor} 
                  className={cn(
                    "border-l-3 px-3 py-2 cursor-pointer",
                    path === `${item.href}/${val.anchor}` ?
                      "font-bold text-[#151c25] border-l-[#151c25] dark:border-l-[#f0f0f0] dark:text-[#f0f0f0]"
                    :
                      "text-[#696c72] hover:text-[#151c25] hover:border-l-[#151c25] dark:text-[#a0a0a0] dark:hover:border-[#f0f0f0] dark:hover:text-[#f0f0f0]"
                    )}>
                  <Link activeClass="active" to={val.anchor} spy={true} smooth={true} offset={-100} duration={500}>{val.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
