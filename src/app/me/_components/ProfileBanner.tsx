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
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { EditModeAvatarDialog } from "./EditModeAvatarDialog";
import useAvatarNFT from "@/hooks/useAvatarNFT";
import { Button } from "@/components/ui/button";
import { RiShare2Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { Tooltip } from "@nextui-org/react";
import useVerifiedProfile from "@/hooks/useVerifiedProfile";

export default function ProfileBanner({
  user: userContext,
}: {
  user: ProfileQuery;
}) {
  const { user, isLoading } = userContext;

  const [profile, setProfile] = useState<StorageProfile | undefined>(undefined);
  const [profileLoading, setProfileLoading] = useState(false);
  const [hoverAvatar, setHoverAvatar] = useState(false);
  const [copyLink, setCopyLink] = useState(false);
  const {
    avatar,
    isLoading: loadingAvatar,
    isError: errorAvatar,
  } = useAvatarNFT();
  const { isVerified, isLoading: loadingVerified } = useVerifiedProfile();

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
            className="rounded-none md:rounded-lg hover:bg-black"
          />
        ) : (
          <Skeleton className="h-[100px] w-full rounded-none md:rounded-t-lg md:h-[300px]" />
        )}
      </div>

      {/* Banner on mobile screen */}
      <div className="absolute left-0 right-0 block h-[250px] w-full md:hidden">
        <div className="flex flex-col h-full items-start mx-4 justify-center">
          <div className="w-full flex justify-between items-end">
            <EditModeAvatarDialog address={user.address}>
              <div className="relative flex h-[100px] w-[100px] select-none items-center justify-center rounded-full border-2 border-fuchsia-600 p-[2px]">
                <div
                  className="absolute z-10 h-[100px] w-[100px] cursor-pointer rounded-full duration-200 ease-in-out hover:bg-black/40"
                  onMouseEnter={() => setHoverAvatar(true)}
                  onMouseLeave={() => setHoverAvatar(false)}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <MdOutlineModeEdit
                      className={cn(
                        "text-2xl text-white",
                        hoverAvatar ? "block" : "hidden",
                      )}
                    />
                  </div>
                </div>

                {loadingAvatar ? (
                  <Skeleton className="h-[92px] w-[92px] rounded-full bg-gray-300 dark:bg-zinc-700" />
                ) : (
                  (avatar && (
                    <div className="relative z-0 h-[92px] w-[92px]">
                      <Image
                        src={avatar}
                        fill
                        alt="Avatar"
                        style={{ objectFit: "cover" }}
                        className="absolute rounded-full bg-background"
                        loading="lazy"
                      />
                    </div>
                  )) || <BoringAvatar size={95} name={user.address} />
                )}
              </div>
            </EditModeAvatarDialog>
            <div className="flex gap-2">
              <Button className="p-2" size="sm" variant="ghost">
                <RiShare2Line className="text-xl" />
              </Button>
              <Button className="p-2" size="sm" variant="outline">Edit cover</Button>
            </div>
          </div>
          

          <div className="w-full">
            <div className="text-2xl font-bold flex gap-1 items-center">
              <h1 className="truncate text-start">
                {(user.session.name && truncate(user.session.name, 20)) ||
                  shortenAddress(user.address)}
              </h1>
              <MdVerified className={cn(isVerified ? "text-blue-500" : "text-gray-400 dark:text-gray-400")} />
            </div>
           
            <AddressClipboard address={user.address} content="Copy Address" />
          </div>
        </div>
      </div>

      {/* Banner on desktop screen */}
      <div className="absolute hidden h-[300px] w-full px-7 py-6 md:block">
        <div className="mb-4 flex w-full justify-between">
          <div className="flex items-center gap-3">
            <EditModeAvatarDialog address={user.address}>
              <div className="relative flex h-[125px] w-[125px] select-none items-center justify-center rounded-full border-2 border-fuchsia-600 p-1">
                <div
                  className="absolute z-10 h-[115px] w-[115px] cursor-pointer rounded-full duration-200 ease-in-out hover:bg-black/40"
                  onMouseEnter={() => setHoverAvatar(true)}
                  onMouseLeave={() => setHoverAvatar(false)}
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <MdOutlineModeEdit
                      className={cn(
                        "text-2xl text-white",
                        hoverAvatar ? "block" : "hidden",
                      )}
                    />
                  </div>
                </div>

                {loadingAvatar ? (
                  <Skeleton className="h-[115px] w-[115px] rounded-full bg-gray-300 dark:bg-zinc-700" />
                ) : (
                  (avatar && (
                    <div className="relative z-0 h-[115px] w-[115px]">
                      <Image
                        src={avatar}
                        fill
                        alt="Avatar"
                        style={{ objectFit: "cover" }}
                        className="absolute rounded-full bg-background"
                        loading="lazy"
                      />
                    </div>
                  )) || <BoringAvatar size={115} name={user.address} />
                )}
              </div>
            </EditModeAvatarDialog>

            <div
              className={cn(
                open_sans.className,
                "flex  max-w-[400px] flex-col gap-2 md:max-w-[400px] lg:max-w-[540px] xl:max-w-[640px]",
              )}
            >
              <div className="flex w-full items-center gap-1 text-4xl font-bold">
                <div className="truncate">
                  <h2 className="truncate text-zinc-100">
                    {user.session.name || user.address}
                  </h2>
                </div>
                <TooltipMsg message={isVerified ? "Verified" : "Not Verified"} delay={250}>
                  <Link href="/me">
                    <div className="cursor-pointer rounded-sm p-1 hover:bg-slate-500/30">
                      {!loadingVerified && (
                        <MdVerified className={cn(isVerified ? "text-blue-500" : "text-gray-400 dark:text-gray-400")} />
                      )}
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
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="hidden gap-2 p-2 md:flex" variant="outline">
                  <RiShare2Line className="text-xl" />
                  <span className="hidden lg:block">Share</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share link</DialogTitle>
                  <DialogDescription>
                    You can share your profile link to the other NFT enthusiast.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Label htmlFor="link" className="sr-only">
                      Link
                    </Label>
                    <Input
                      id="link"
                      defaultValue={`${process.env.NEXT_PUBLIC_APP_URL}/user/${user.address}`}
                      readOnly
                    />
                  </div>
                  <Tooltip
                    isOpen={copyLink}
                    onOpenChange={(open) => setCopyLink(open)}
                    content="Copy link"
                  >
                    <Button type="submit" size="sm" variant="ghost" className="px-3"
                      onClick={() => { navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_APP_URL}/user/${user.address}`)}}
                    >
                      <span className="sr-only">Copy</span>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </Tooltip>
                  
                </div>
                <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="default">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button className="hidden gap-2 p-2 md:flex" variant="outline">
              <FiEdit3 className="text-xl lg:hidden" />
              <span className="hidden lg:block">Upload Cover</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
