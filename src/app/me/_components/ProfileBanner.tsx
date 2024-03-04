"use client";

import { TooltipMsg } from "@/components/(interfaces)";
import { open_sans } from "@/lib/fonts";
import { cn, shortenAddress } from "@/lib/utils";
import { Button, ButtonGroup, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { Profile, useProfileContext } from "../_provider/ProfileProvider";
import Link from "next/link";
import AddressClipboard from "@/components/(interfaces)/AddressClipboard";



export default function ProfileBanner() {
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const profile = useProfileContext();

  return (
    <div className="w-full flex flex-col bg-gradient-to-br from-[#740954] to-[#202020] text-white">
      <div className="relative w-auto h-[200px] md:h-[300px]">
        
      </div>
      <div className="absolute hidden md:block w-full h-[300px] px-7 py-6 dark:shadow-[inset_0_-50px_100px_rgba(10,10,10,1)]">
        <div className="flex justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image
              src={"/assets/image_not_found.jpg"}
              width={125}
              height={125}
              alt=""
              className="border rounded-full aspect-square object-fill"
            />
            <div className={cn(open_sans.className, "w-[600px]")}>
              <div className="w-full flex gap-1 items-center font-bold text-4xl">
                <div className="truncate">
                  <h2 className="truncate">{profile.session.name || ""}</h2>
                </div>
                <TooltipMsg message="Not Verified">
                  <div className='rounded-sm hover:bg-slate-500/30 p-1 cursor-pointer'>
                    <MdVerified className='text-gray-400'/>
                  </div>
                </TooltipMsg>
              </div>
              <div>
                <AddressClipboard 
                  address={profile.address}
                  content="Copy Address"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
