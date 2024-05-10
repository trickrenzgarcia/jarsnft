"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function DropdownButton() {
  const [dropdownName, setDropdownName] = useState("All Collections");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-12 w-52 items-center justify-center gap-2 rounded-lg bg-slate-600">
        {dropdownName}
        <IoIosArrowDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setDropdownName("All Collections")}>
          All Collections
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDropdownName("Art NFTs")}>
          Art NFTs
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setDropdownName("Photography NFTs")}>
          Photography NFTs
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setDropdownName("Profile Picture NFTs")}
        >
          Profile Picture NFTs
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
