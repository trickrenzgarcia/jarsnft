"use client";

import React from "react";
import ProfileBanner from "./ProfileBanner";
import TabsWrapper from "./TabsWrapper";
import { useUserContext } from "@/components/(providers)";
import NoConnectedWallet from "./NoConnectedWallet";

export default function ProfileWrapper() {
  const user = useUserContext();

  if (!user.isLoading && !user.isLoggedIn) {
    return <NoConnectedWallet />;
  }

  return (
    <div className="">
      <ProfileBanner user={user} />
      <TabsWrapper user={user} />
    </div>
  );
}
