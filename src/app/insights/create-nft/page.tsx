"use client"

import { useUser } from "@thirdweb-dev/react";
import { ConnectWeb3, CreateUserDialog, ProfileButton } from "@/components/(interfaces)/index";
import { ProfileQuery } from "@/types/users";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function CreateNftPage() {
  const { user, isLoading, isLoggedIn } = useUser() as ProfileQuery;
  return (
    <>  
    <div className="w-full h-screen">
    <div className="flex flex-col">
      <div className="flex flex-row gap-5 items-center justify-between">
      <h1 className="text-2xl">Step 1: Connect wallet of your choosing</h1>
      <div className="flex-wrap">
      {isLoading ? (
        <>
        <div className="flex flex-row gap-4 items-center mr-8">
        <Skeleton className="h-[35px] w-[35px] rounded-full" />
        <Skeleton className="h-[53px] w-[120px] rounded-[8px]" />
        </div>
        </>
      ) : isLoggedIn ? (
        <div className="flex items-center gap-2">
          <ProfileButton />
          <ConnectWeb3 btnTitle="Connect" />
        </div>
      ) : (
        <ConnectWeb3 btnTitle="Connect" />
      )}
      </div>
      </div>
      {/* If the user is logged in but not listed. */}
      {isLoggedIn && !user.data.session.is_listed && (
        <CreateUserDialog isOpenCreate={!user.data.session.is_listed} />
      )}
      
      <div className="mt-5">
      <h1 className="text-2xl">Step 2: In Navigation bar go to &quot;Create&quot;</h1>
      </div>
      <div className="mt-5">
      <h1 className="text-2xl">Step 3: Choose &quot;Create NFT Collection&quot; if you want a collection of NFT(s) and &quot;Mint an NFT&quot; for single NFT</h1>
      <div className="hidden md:hidden lg:block 2xl:block ">
      <Image
      src="/CreatePage.png"
      width={900}
      height={500}
      alt="page"
      quality={100}
      className="mt-5"
      style={{minWidth:900 ,minHeight:500}}
      />
      </div>
      
      </div>
    </div>
    </div>
    </>
  );
}
