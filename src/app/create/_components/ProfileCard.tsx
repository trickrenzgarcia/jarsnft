"use client";

import { ConnectWeb3, MinidentIconImg, TooltipMsg } from "@/components/(interfaces)";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { shortenAddress } from "@/lib/utils";
import { Profile } from "@/types/users";
import { minidenticon } from "minidenticons";
import { IoCopy } from "react-icons/io5";

export default function ProfileCard({ user }: { user: Profile }) {
  if (!user) { 
    return (
      <Card className="max-w-[300px] w-[300px] mb-5 bg-default-200 dark:bg-neutral-900">
        <CardHeader className="w-full flex flex-col items-center">
          <CardTitle className="text-red-400">No Wallet Detected!</CardTitle>
        </CardHeader>
        <CardContent className="pb-5 flex justify-center">
          <ConnectWeb3 btnTitle="Connect Wallet" />
        </CardContent>
      </Card>
    )
  };

  return (
    <Card className="max-w-[300px] w-[300px] mb-5 bg-default-200 dark:bg-neutral-900">
      <CardHeader className="w-full flex flex-col items-center">
        <div className="border-2 border-purple-600 rounded-full">
          <MinidentIconImg address={user.data.address} width={100} height={100} />
        </div>
        <h1 className="w-full truncate text-center font-semibold text-xl py-2">
          {user.data.session.name}
        </h1>
        <div className="flex items-center gap-2">
          <h2 className="w-full text-center text-sm">
            {shortenAddress(user.address || "", 15, 5)}
          </h2>
          <TooltipMsg message="Copy" delay={100}>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(user.address);
              }}
            >
              <IoCopy className="cursor-pointer" />
            </button>
          </TooltipMsg>
        </div>
      </CardHeader>

      <CardContent className="px-5"></CardContent>
    </Card>
  );
}
