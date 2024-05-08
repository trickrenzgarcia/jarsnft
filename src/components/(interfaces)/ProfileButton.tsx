"use client";

import {
  ButtonGroup,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Spinner,
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { BoringAvatar, MinidentIconImg } from ".";
import { CgDetailsMore } from "react-icons/cg";
import Link from "next/link";

import { useLogout, useUser } from "@thirdweb-dev/react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ProfileQuery } from "@/types/users";
import { Skeleton } from "../ui/skeleton";
import { jars } from "@/lib/core/api";
import useAvatarNFT from "@/hooks/useAvatarNFT";
import Image from "next/image";

export default function ProfileButton() {
  const {
    user,
    isLoading: isUserLoading,
    isLoggedIn,
  } = useUser() as ProfileQuery;
  const { logout, isLoading: logoutLoading } = useLogout();
  const [name, setName] = React.useState<string>("");

  const { avatar, isLoading, isError } = useAvatarNFT();

  useEffect(() => {
    const fetchName = async () => {
      if (isLoggedIn) {
        const data = await jars.getUser(user.address);
        setName(data.name);
      }
    };
    fetchName();
  }, [user, isUserLoading, isLoggedIn]);

  return (
    <div className="">
      <ButtonGroup className="gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex h-full max-w-[150px] cursor-pointer items-center gap-1 rounded-2xl p-2 hover:bg-slate-100 hover:dark:bg-slate-800">
              {isLoading ? <Skeleton className="w-[35] h-[35] rounded-full" /> : avatar ? 
              <div className="relative w-[35px] h-[35px] rounded-full">
                <Image 
                src={avatar} 
                fill
                alt="Avatar"
                style={{ objectFit: "cover" }}
                className="absolute rounded-full"
                loading="lazy"
                />
              </div> : 
              <BoringAvatar size={35} name={user.address} />}
            </div>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col gap-5">
              <div className="cursor-pointer rounded-lg border px-3 py-2 hover:bg-zinc-700/50">
                <Link href="/me">
                  {isUserLoading ? (
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-[50] w-[50] rounded-full" />
                      <Skeleton className="h-4 w-full rounded-full" />
                    </div>
                  ) : (
                    <div className="flex w-full items-center gap-3">
                      {isLoading ? 
                      (<Skeleton className="h-[50] w-[50] rounded-full" />) : avatar && (<div className="relative w-[50px] h-[50px] rounded-full">
                      <Image 
                      src={avatar} 
                      fill
                      alt="Avatar"
                      style={{ objectFit: "cover" }}
                      className="absolute rounded-full"
                      loading="lazy"
                    /> </div>) ||  <BoringAvatar size={50} name={user.address} />
                      }
                      
                      <span className="truncate font-bold">{name}</span>
                    </div>
                  )}
                </Link>
              </div>
              <div>
                {/* <section>General</section>
                <section>NFTs</section>
                <section>Wallet</section>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Navigation</h4>
                    <p className="text-sm text-muted-foreground">
                      # Create <br />
                      # Collections <br />
                      # Trade <br />
                      # Coin Analytics <br />
                      # Insights <br />
                    </p>
                  </div>
                </div> */}
                <Button
                  onClick={() => logout()}
                  disabled={logoutLoading}
                  className="w-full"
                >
                  {logoutLoading ? <Spinner /> : "Disconnect"}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* <Sheet>
          <SheetTrigger asChild>
            <div className='p-2 h-full rounded-md hover:bg-slate-300 hover:dark:bg-slate-800 cursor-pointer'>
              <CgDetailsMore className='text-3xl' />
            </div>
          </SheetTrigger>
          <SheetContent>
            
          </SheetContent>
        </Sheet> */}
      </ButtonGroup>
    </div>
  );
}
