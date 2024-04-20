"use client";

import { MinidentIconImg, TooltipMsg } from "@/components/(interfaces)";
import AddressClipboard from "@/components/(interfaces)/AddressClipboard";
import { StorageProfile, User } from "@/lib/core/types";
import { open_sans } from "@/lib/fonts";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { MdVerified } from "react-icons/md";

type Props = {
  user: User & {
    profile: StorageProfile;
  };
};

export default async function UserBanner({ user }: Props) {
  return (
    <div className="relative mb-40 flex w-full flex-col rounded-lg bg-black/50 dark:shadow-[inset_0_0px_50px_rgba(10,10,10,1)] md:mb-8 md:mt-4">
      {/* Image banner */}
      <div className="relative h-[100px] w-auto md:h-[300px]">
        <Image
          src="/assets/collection_banner.webp"
          fill
          style={{ objectFit: "cover", opacity: 0.7 }}
          alt="Banner"
          className="rounded-lg hover:bg-black"
        />
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
                  <h2 className="truncate">{user.name || ""}</h2>
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
