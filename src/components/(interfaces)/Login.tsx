"use client";

import { useUser, useLogout, useAddress } from "@thirdweb-dev/react";
import { ConnectWalletV4, CreateUserDialog, ProfileButton } from ".";
import { ProfileQuery } from "@/types/users";
import { Skeleton } from "../ui/skeleton";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Login() {
  const { user, isLoading, isLoggedIn } = useUser() as ProfileQuery;
  const address = useAddress();
  const { logout, isLoading: logoutLoading } = useLogout();

  useEffect(() => {
    // Handle page exit or wallet disconnection
    const handleUnload = () => {
      if (isLoggedIn) {
        logout(); // Log out the user if logged in
      }
    };

    // Listen for the page unload event
    window.addEventListener("beforeunload", handleUnload);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [isLoggedIn, logout, user]);

  return (
    <div className="flex items-center">
      {isLoading ? (
        <Skeleton className="h-[35px] w-[35px] rounded-full" />
      ) : isLoggedIn ? (
        <div className="flex items-center gap-2">
          {isLoggedIn && user.data.session.isListed && address && <ProfileButton />} {/* ProfileButton will only be shown if isLoggedIn is true */}
          <ConnectWalletV4 btnTitle="Connect" />
        </div>
      ) : (
        <ConnectWalletV4 btnTitle="Connect" />
      )}
      {/* If the user is logged in but not listed. */}
      {isLoggedIn && !user.data.session.isListed && <CreateUserDialog isOpenCreate={!user.data.session.isListed} />}
    </div>
  );
}
