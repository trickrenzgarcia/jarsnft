"use client";

import { useUser } from "@thirdweb-dev/react";
import { ConnectWeb3, CreateUserDialog, ProfileButton } from ".";
import { ProfileQuery } from "@/types/users";
import { Skeleton } from "../ui/skeleton";

export default function Login() {
  const { user, isLoading, isLoggedIn } = useUser() as ProfileQuery;

  return (
    // Connect Wallet for Context
    <div className="flex items-center">
      {(isLoading ? (
        <Skeleton className="w-[35px] h-[35px] rounded-full" />
      ) : isLoggedIn ? (
        <div className="flex items-center gap-2">
          <ProfileButton />
          <ConnectWeb3 btnTitle="Connect" />
        </div>
      ) : <ConnectWeb3 btnTitle="Connect" />)}

      {/* If the user is logged in but not listed. */}
      {isLoggedIn && !user.data.session.is_listed && (
        <CreateUserDialog isOpenCreate={!user.data.session.is_listed} />
      )}
    </div>
  );
}
