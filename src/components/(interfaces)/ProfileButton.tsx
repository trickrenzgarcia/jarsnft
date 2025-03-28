"use client";

import {
  ButtonGroup,
  Spinner,
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { BoringAvatar } from ".";
import { LuWallet } from "react-icons/lu";
import Link from "next/link";

import { useLogout, useUser } from "@thirdweb-dev/react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ProfileQuery } from "@/types/users";
import { Skeleton } from "../ui/skeleton";
import jars from "@/lib/api";
import useAvatarNFT from "@/hooks/useAvatarNFT";
import Image from "next/image";
import { shortenAddress } from "@/lib/utils";
import { IoWallet } from "react-icons/io5";

export default function ProfileButton() {
  const {
    user,
    isLoading: isUserLoading,
    isLoggedIn,
  } = useUser() as ProfileQuery;
  const { logout, isLoading: logoutLoading } = useLogout();

  const { avatar, isLoading, isError } = useAvatarNFT();

  return (
    <div className="hidden lg:block">
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

              <div className="rounded-lg px-3 py-2">
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
                    
                    <div>
                      <p className="truncate font-bold">{user.data.session.name}</p>
                      <p className="text-xs">{shortenAddress(user.address,6 ,4)}</p>
                    </div>
                      
                  </div>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <ProfileListButton name="My Profile" icon={<LuWallet className="text-2xl" />} link="/me" />
                {/* <ProfileListButton name="Activities" icon={<LuActivitySquare className="text-2xl" />} link="/me/activities" /> */}
                {/* <ProfileListButton name="Favorites" icon={<TiHeartOutline className="text-2xl"/>} link="/me/favorites" /> */}
                {/* <ProfileListButton name="Offers" icon={<MdOutlineLocalOffer className="text-2xl" />} link="/me/offers" /> */}
                {/* <ProfileListButton name="Settings" icon={<LuSettings className="text-2xl" />} link="/me/settings" /> */}
                
              </div>

              <div>
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

export function ProfileHamburger(){
  const {
    user,
    isLoading: isUserLoading,
    isLoggedIn,
  } = useUser() as ProfileQuery;
  const { logout, isLoading: logoutLoading } = useLogout();
  console.log(isLoggedIn)
  const { avatar, isLoading, isError } = useAvatarNFT()

  return(
    <>
    {isLoggedIn && (
      <div className="my-6">
        <div className="rounded-lg px-3 py-2">
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
              
              <div>
                <p className="truncate font-bold">{user.data.session.name}</p>
                <p className="text-xs">{shortenAddress(user.address,6 ,4)}</p>
              </div>
                
            </div>
          )}
        </div>
        {/* <ProfileListButton name="My Profile" icon={<LuWallet className="text-2xl" />} link="/me" /> */}
        <Link href="/me">
          <Button className="w-full border-[#A519D7] border-l-1 rounded-xl flex mt-2 justify-start gap-2 text-sm py-6 text-[#c5c5c5] dark:text-[#dddddd]" variant="ghost">
            <IoWallet className="text-2xl" />
            {"My Profile"}
          </Button>
        </Link>
        </div>
      )}
    </>

  )
}

export function ProfileListButton({ name, icon, link }: { name: string; icon: JSX.Element; link: string }) {
  return (
    <Link href={link}>
      <Button className="w-full rounded-xl flex justify-start gap-2 text-sm py-6 text-gray-500 dark:text-gray-400" variant="ghost">
        {icon}
        {name}
      </Button>
    </Link>
  )
}
