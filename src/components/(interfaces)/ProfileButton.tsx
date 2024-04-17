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
import React from "react";
import { MinidentIconImg } from ".";
import { CgDetailsMore } from "react-icons/cg";
import Link from "next/link";

import { useLogout, useUser } from "@thirdweb-dev/react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Profile } from "@/types/users";
import { Skeleton } from "../ui/skeleton";

export default function ProfileButton({
  user,
  isUserLoading,
}: {
  user: Profile;
  isUserLoading: boolean;
}) {
  const { logout, isLoading: logoutLoading } = useLogout();

  return (
    <div className="">
      <ButtonGroup className="gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex h-full max-w-[150px] cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-slate-300 hover:dark:bg-slate-800">
              <MinidentIconImg
                address={user.data.address}
                width={30}
                height={30}
              />
              <h2 className="truncate font-semibold">{user.data.session.name || user.address}</h2>
            </div>
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 flex flex-col">
              <div className="cursor-pointer rounded-lg border px-3 py-2 hover:bg-zinc-700/50">
                <Link href="/me">
                  {isUserLoading ? (
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-[50] w-[50] rounded-full" />
                      <Skeleton className="h-4 w-full rounded-full" />
                    </div>
                  ) : (
                    <div className="flex w-full items-center gap-3">
                      <MinidentIconImg
                        address={user.data.address}
                        height={50}
                        width={50}
                      />
                      <span className="truncate font-bold">
                        {user.data.session.name}
                      </span>
                    </div>
                  )}
                </Link>
              </div>
              <div>
                <section>General</section>
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
                </div>
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
