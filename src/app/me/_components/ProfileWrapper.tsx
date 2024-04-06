"use client";

import React from "react";
import ProfileBanner from "./ProfileBanner";
import TabsWrapper from "./TabsWrapper";
import { useUserContext } from "@/components/(providers)";

export default function ProfileWrapper() {
  const user = useUserContext();

  return (
    <div className="">
      <ProfileBanner user={user} />
      <TabsWrapper user={user} />
    </div>
  );
}
