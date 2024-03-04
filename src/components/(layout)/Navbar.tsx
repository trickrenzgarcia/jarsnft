"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ConnectWallet,
  useLogin,
  useContract,
  useLogout,
  useUser,
  useAddress,
  useSwitchAccount,
} from "@thirdweb-dev/react";
import { ConnectWeb3, ProfileButton } from "../(interfaces)";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Profile } from "@/types";
import { Spinner } from "@nextui-org/react";

type DisplayType = "fixed" | "sticky";

interface NavbarProps {
  display: DisplayType;
}

interface ProfileQuery {
  user: Profile;
  isLoading: boolean;
  isLoggedIn: boolean;
}

export default function Navbar({ display }: NavbarProps) {
  const { user, isLoading, isLoggedIn } = useUser() as ProfileQuery;

  return (
    <nav
      className={`${display} w-full h-[70px] px-[1.2rem] py-[0.8rem] flex justify-between z-50 top-0 left-0 
      bg-white dark:bg-opacity-100 dark:bg-background border-b-2`}
    >
      <div className="flex flex-row justify-between items-center w-full max-w-screen-2xl mx-auto">
        {/* Left-side  */}
        <div className="flex items-center">
          <div className="">
            <Link href="/">
              <h1 className="font-extrabold text-2xl">Jarsnft</h1>
            </Link>
          </div>

          <div className="hidden lg:flex ml-36 gap-1 xl:mr-5">
            <Link
              href="/create"
              className="px-3 font-semibold hover:text-zinc-500 cursor-pointer"
            >
              Create
            </Link>
            <Link
              href="/collection"
              className="px-3 font-semibold hover:text-zinc-500 cursor-pointer"
            >
              Collections
            </Link>
            <Link
              href="/trade"
              className="px-3 font-semibold hover:text-zinc-500 cursor-pointer"
            >
              Trade
            </Link>
            <Link
              href="/coin"
              className="px-3 font-semibold hover:text-zinc-500 cursor-pointer"
            >
              Coin Analytics
            </Link>
            <Link
              href="/learn"
              className="px-3 font-semibold hover:text-zinc-500 cursor-pointer"
            >
              Insights
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          {(isLoggedIn && (
            <>
              {user.session.is_listed && (
                <ProfileButton address={user?.address || "default"} />
              )}
            </>
          )) || <ConnectWeb3 btnTitle="Connect" />}
        </div>
      </div>
      {isLoggedIn && !user.session.is_listed && (
        (<CreateNewUser isOpenCreate={!user.session.is_listed} />)
      )}
    </nav>
  );
}

function CreateNewUser({ isOpenCreate }: { isOpenCreate: boolean }) {
  const { logout, isLoading } = useLogout();
  return (
    <Dialog open={isOpenCreate}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="" placeholder="Enter name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" value="" placeholder="alan_turing@gmail.com" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <div className="flex flex-col w-full justify-center items-center gap-3">
            <Button type="submit">Create</Button>
            <Button variant="ghost" onClick={() => logout()}>{isLoading ? <Spinner /> : "Logout"}</Button>
            <Link href="/learn/getting-started#installing-wallet" className="text-left">New to wallet?</Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
