"use client";

import { useUser } from "@thirdweb-dev/react";
import { ConnectWeb3, CreateUserDialog, ProfileButton } from ".";
import { ProfileQuery } from "@/types/users";

export default function Login() {
  const { user, isLoading, isLoggedIn } = useUser() as ProfileQuery;
  return (
    // Connect Wallet for Context
    <div className="flex items-center">
      {(isLoggedIn && (
        <ProfileButton user={user} isUserLoading={isLoading} />
      )) || <ConnectWeb3 btnTitle="Connect Wallet" />}

      {isLoggedIn && !user.data.session.is_listed && (
        <CreateUserDialog isOpenCreate={!user.data.session.is_listed} />
      )}
    </div>
  );
}
