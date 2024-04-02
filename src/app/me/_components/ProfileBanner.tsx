"use client";

import { MinidentIconImg, TooltipMsg } from "@/components/(interfaces)";
import { open_sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import AddressClipboard from "@/components/(interfaces)/AddressClipboard";
import { useUserContext } from "@/components/(providers)";
import LoadingBackground from "./LoadingBackground";
import NoConnectedWallet from "./NoConnectedWallet";

export default function ProfileBanner() {
  const { user, isLoading, isLoggedIn } = useUserContext();

  if (isLoading) {
    return <LoadingBackground />;
  }

  if (!isLoggedIn) {
    return <NoConnectedWallet />;
  }

  return (
    <div className="mb-8 mt-4 flex w-full flex-col rounded-lg bg-muted">
      <div className="relative h-[200px] w-auto md:h-[300px]"></div>
      <div className="absolute hidden h-[300px] w-full px-7 py-6 dark:shadow-[inset_0_-50px_100px_rgba(10,10,10,1)] md:block">
        <div className="mb-4 flex justify-between">
          <div className="flex items-center gap-3">
            <MinidentIconImg address={user.address} width={125} height={125} />

            <div className={cn(open_sans.className, "w-[600px]")}>
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
