"use client";

import { MinidentIconImg, TooltipMsg } from "@/components/(interfaces)";
import { open_sans } from "@/lib/fonts";
import { cn, shortenAddress, truncate } from "@/lib/utils";
import React from "react";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import AddressClipboard from "@/components/(interfaces)/AddressClipboard";
import { useUserContext } from "@/components/(providers)";
import { Skeleton } from "@/components/ui/skeleton";
import { ProfileQuery } from "@/types/users";
import Image from "next/image";

export default function ProfileBanner({
  user: userContext,
}: {
  user: ProfileQuery;
}) {
  const { user, isLoading } = userContext;

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
    <div className="mb-40 flex w-full flex-col rounded-lg bg-muted dark:shadow-[inset_0_0px_50px_rgba(10,10,10,1)] md:mb-8 md:mt-4">
      {/* Image banner */}
      <div className="relative h-[100px] w-auto md:h-[300px]">
        <Image
          src="/assets/collection_banner.webp"
          fill
          style={{ objectFit: "cover", opacity: 0.5 }}
          alt="Banner"
          className="rounded-lg"
        />
      </div>

      {/* Banner on mobile screen */}
      <div className="absolute left-0 right-0 block h-[250px] w-full md:hidden">
        <div className="flex h-full flex-col items-center justify-center bg-blue-400/5">
          <div className="h-[100px] w-[100px] rounded-full border-2 border-fuchsia-600 p-1">
            <MinidentIconImg address={user.address} width={100} height={100} />
          </div>
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
            <div className="h-[125px] w-[125px] select-none rounded-full border-2 border-fuchsia-600 p-1">
              <MinidentIconImg
                address={user.address}
                width={125}
                height={125}
              />
            </div>

            <div
              className={cn(
                open_sans.className,
                "flex w-[600px] flex-col gap-2",
              )}
            >
              <div className="flex w-full items-center gap-1 text-4xl font-bold">
                <div className="truncate">
                  <h2 className="truncate">{user.session.name || ""}</h2>
                </div>
                <TooltipMsg message="Not Verified" delay={250}>
                  <Link href="/me/settings">
                    <div className="cursor-pointer rounded-sm p-1 hover:bg-slate-500/30">
                      <MdVerified className="text-gray-400" />
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
        </div>
      </div>
    </div>
  );
}
