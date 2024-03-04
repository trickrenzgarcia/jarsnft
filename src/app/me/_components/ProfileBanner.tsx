"use client";

import { MinidentIconImg, TooltipMsg } from "@/components/(interfaces)";
import { open_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import { MdVerified } from "react-icons/md";
import { useProfileContext } from "../_provider/ProfileProvider";
import Link from "next/link";
import AddressClipboard from "@/components/(interfaces)/AddressClipboard";



export default function ProfileBanner() {
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const profile = useProfileContext();

  return (
    <div className="w-full flex flex-col bg-gradient-to-b from-[#740954] to-gray-300 dark:to-[#202020] text-white">
      <div className="relative w-auto h-[200px] md:h-[300px]">
        
      </div>
      <div className="absolute hidden md:block w-full h-[300px] px-7 py-6 dark:shadow-[inset_0_-50px_100px_rgba(10,10,10,1)]">
        <div className="flex justify-between mb-4">
          <div className="flex items-center gap-3">
            <MinidentIconImg address={profile.address} width={125} height={125} />
            
            <div className={cn(open_sans.className, "w-[600px]")}>
              <div className="w-full flex gap-1 items-center font-bold text-4xl">
                <div className="truncate">
                  <h2 className="truncate">{profile.session.name || ""}</h2>
                </div>
                <TooltipMsg message="Not Verified" delay={250}>
                  <Link href="/me/settings">
                    <div className='rounded-sm hover:bg-slate-500/30 p-1 cursor-pointer'>
                      <MdVerified className='text-gray-400'/>
                    </div>
                  </Link>
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
