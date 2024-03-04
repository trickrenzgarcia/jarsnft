"use client"

import { Profile } from "@/types";
import { Json } from "@thirdweb-dev/auth";
import { UserWithData } from "@thirdweb-dev/react";
import { createContext, use } from "react";


interface ProfileProviderProps {
    children: React.ReactNode,
    value: UserWithData<Json, Json> | undefined
}

const ProfileContext = createContext<UserWithData<Json, Json> | undefined>(undefined);

export default function ProfileProvider({ children, value }: ProfileProviderProps) {
  return (
    <ProfileContext.Provider value={value}>
        {children}
    </ProfileContext.Provider>
  )
}

export function useProfileContext() {
  const profile = use(ProfileContext);

  if (profile === undefined) {
    throw new Error(
      "The profile context is undefined, wrap in ProfileContext.Provider"
    );
  }

  return profile as Profile;
}
