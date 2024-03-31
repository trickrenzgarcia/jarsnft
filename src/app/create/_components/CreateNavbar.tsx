"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { IoArrowBack, IoCopy } from "react-icons/io5";
import { useUserContext } from "@/components/(providers)";
import {
  ConnectWeb3,
  MinidentIconImg,
  TooltipMsg,
} from "@/components/(interfaces)";
import { Skeleton } from "@/components/ui/skeleton";
import { shortenAddress } from "@/lib/utils";

export default function CreateNavbar() {
  const router = useRouter();
  const { user, isLoading, isLoggedIn } = useUserContext();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between md:container">
        <div className="flex items-center gap-1">
          <Button
            className="rounded-full px-[12px] py-[10px]"
            variant="ghost"
            onClick={() => router.back()}
          >
            <IoArrowBack className="text-lg" />
          </Button>

          <h1 className="font-semibold">Go back</h1>
        </div>

        <div className="mr-4 block lg:hidden">
          {(isLoading && <Skeleton className="h-9 w-9 rounded-full" />) ||
            (!user && <></>) ||
            (user && (
              <TooltipMsg message="Copy" delay={100}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(user.data.address);
                  }}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <MinidentIconImg
                    address={user.data.address}
                    width={36}
                    height={36}
                  />
                  <p>{shortenAddress(user.data.address, 4, 3)}</p>
                  <IoCopy className="cursor-pointer" />
                </button>
              </TooltipMsg>
            ))}
        </div>
      </div>
    </header>
  );
}
