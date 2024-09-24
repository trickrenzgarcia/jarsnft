"use client";

import { useUser } from "@thirdweb-dev/react";
import { ConnectWalletV4, CreateUserDialog, ProfileButton } from ".";
import { ProfileQuery } from "@/types/users";
import { Skeleton } from "../ui/skeleton";

export default function Login() {
  const { user, isLoading, isLoggedIn } = useUser() as ProfileQuery;

  return (
    // Connect Wallet for Context
    <div className="flex items-center">
      {isLoading ? (
        <Skeleton className="h-[35px] w-[35px] rounded-full" />
      ) : isLoggedIn ? (
        <div className="flex items-center gap-2">
          <ProfileButton />
          <ConnectWalletV4 btnTitle="Connect" />
        </div>
      ) : (
        <ConnectWalletV4 btnTitle="Connect" />
      )}

      {/* If the user is logged in but not listed. */}
      {isLoggedIn && !user.data.session.isListed && (
        <CreateUserDialog isOpenCreate={!user.data.session.isListed} />
      )}
    </div>
  );
}
