"use client";

import { TooltipMsg } from "@/components/(interfaces)";
import { open_sans } from "@/lib/fonts";
import { cn, shortenAddress, truncate } from "@/lib/utils";
import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import AddressClipboard from "@/components/(interfaces)/AddressClipboard";
import { Skeleton } from "@/components/ui/skeleton";
import { ProfileQuery } from "@/types/users";
import Image from "next/image";
import { StorageProfile } from "@/lib/core/types";
import BoringAvatar from "@/components/(interfaces)/BoringAvatar";
import { MdOutlineModeEdit } from "react-icons/md";
import { EditModeAvatarDialog } from "./EditModeAvatarDialog";
import useAvatarNFT from "@/hooks/useAvatarNFT";

export default function ProfileBanner({
  user: userContext,
}: {
  user: ProfileQuery;}) {
  const { user, isLoading } = userContext;

  const [profile, setProfile] = useState<StorageProfile | undefined>(undefined);
  const [profileLoading, setProfileLoading] = useState(false);
  const [hoverAvatar, setHoverAvatar] = useState(false);
  const { avatar, isLoading: loadingAvatar, isError: errorAvatar } = useAvatarNFT();

  if (isLoading) {
    return (
      <div className="mb-8 flex w-full flex-col rounded-lg dark:shadow-[inset_0_0px_50px_rgba(10,10,10,1)] md:mt-4">
        <div className="relative h-[200px] w-auto select-none md:h-[300px]">
          <Skeleton className="h-[200px] w-full rounded-lg md:h-[300px]" />
        </div>
        <div className="absolute hidden h-[300px] w-full px-7 py-6 md:block">
          <div className="mb-4 flex justify-between">
            <div className="flex items-center gap-3">
              <div className="">
                <Skeleton className="h-[125px] w-[125px] rounded-full bg-gray-300 dark:bg-zinc-700" />
              </div>
              <div className="flex w-full flex-col gap-1 text-4xl font-bold">
                <Skeleton className="h-8 w-[190px] bg-gray-300 dark:bg-zinc-700" />
                <Skeleton className="h-8 w-[150px] bg-gray-300 dark:bg-zinc-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mb-40 flex w-full flex-col rounded-lg bg-black/50 dark:shadow-[inset_0_0px_50px_rgba(10,10,10,1)] md:mb-8 md:mt-4">
      {/* Image banner */}
      <div className="relative h-[100px] w-auto md:h-[300px]">
        {!profileLoading ? (
          <Image
            src={profile?.banner_url || "/assets/collection_banner.webp"}
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            alt="Banner"
            className="rounded-lg hover:bg-black"
          />
        ) : (
          <Skeleton className="h-[100px] w-full rounded-t-lg md:h-[300px]" />
        )}
      </div>

      {/* Banner on mobile screen */}
      <div className="absolute left-0 right-0 block h-[250px] w-full md:hidden">
        <div className="flex h-full flex-col items-center justify-center">
          <EditModeAvatarDialog address={user.address}>
            <div className="relative h-[100px] w-[100px] flex justify-center items-center rounded-full border-2 border-fuchsia-600 p-[2px]">
              <div className="absolute w-[100px] h-[100px] rounded-full hover:bg-black/40 cursor-pointer ease-in-out duration-200"
                onMouseEnter={() => setHoverAvatar(true)} onMouseLeave={() => setHoverAvatar(false)}
              >
                <div className="flex justify-center items-center w-full h-full">
                  <MdOutlineModeEdit className={cn("text-white text-2xl", hoverAvatar ? "block" : "hidden")} />
                </div>
              </div>
              
              <BoringAvatar size={100} name={user.address} />
            </div>
          </EditModeAvatarDialog>
          
          <div className="w-full">
            <h1 className="truncate text-center text-lg font-bold">
              {(user.session.name && truncate(user.session.name, 28)) ||
                shortenAddress(user.address)}
            </h1>
            <AddressClipboard address={user.address} content="Copy Address" />
          </div>
        </div>
      </div>

      {/* Banner on desktop screen */}
      <div className="absolute hidden h-[300px] w-full px-7 py-6 md:block">
        <div className="mb-4 flex justify-between">
          <div className="flex items-center gap-3">
            <EditModeAvatarDialog address={user.address}>
              <div className="relative h-[125px] w-[125px] flex justify-center items-center select-none rounded-full border-2 border-fuchsia-600 p-1">
                <div className="absolute z-10 w-[115px] h-[115px] rounded-full hover:bg-black/40 cursor-pointer ease-in-out duration-200"
                  onMouseEnter={() => setHoverAvatar(true)} onMouseLeave={() => setHoverAvatar(false)}
                >
                  <div className="flex justify-center items-center w-full h-full">
                    <MdOutlineModeEdit className={cn("text-white text-2xl", hoverAvatar ? "block" : "hidden")} />
                  </div>
                </div>

                {loadingAvatar ?
                  <Skeleton className="h-[115px] w-[115px] rounded-full bg-gray-300 dark:bg-zinc-700" />
                : avatar && (
                  <div className="relative w-[115px] h-[115px] z-0">
                    <Image 
                    src={avatar} 
                    fill
                    alt="Avatar"
                    style={{ objectFit: "cover" }}
                    className="absolute rounded-full"
                    loading="lazy"
                    />
                  </div>
                ) || <BoringAvatar size={115} name={user.address} />}  
              
              </div>
            </EditModeAvatarDialog>

            <div
              className={cn(
                open_sans.className,
                "flex w-[600px] flex-col gap-2",
              )}
            >
              <div className="flex w-full items-center gap-1 text-4xl font-bold">
                <div className="truncate">
                  <h2 className="truncate text-zinc-100">{user.session.name || user.address}</h2>
                </div>
                <TooltipMsg message="Not Verified" delay={250}>
                  <Link href="/me/settings">
                    <div className="cursor-pointer rounded-sm p-1 hover:bg-slate-500/30">
                      <MdVerified className="text-gray-500 dark:text-gray-400" />
                    </div>
                  </Link>
                </TooltipMsg>
              </div>
              <div>
                <AddressClipboard
                  address={user.address}
                  content="Copy Address"
                />
              </div>
            </div>
          </div>
          <div className="mr-24 md:mr-28 lg:mr-36 xl:mr-40">x</div>
        </div>
      </div>
    </div>
  );
}
