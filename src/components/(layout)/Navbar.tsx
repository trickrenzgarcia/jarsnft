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
import { ConnectWeb3, CreateUserDialog, ProfileButton } from "../(interfaces)";
import { Profile } from "@/types";

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
              href="/coins"
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
            <ProfileButton address={user?.address || "default"} />
          )) || <ConnectWeb3 btnTitle="Connect" />}
        </div>
      </div>
      {isLoggedIn && !user.session.is_listed && (
        (<CreateUserDialog isOpenCreate={!user.session.is_listed} />)
      )}
    </nav>
  );
}