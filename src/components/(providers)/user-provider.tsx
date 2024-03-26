"use client"

import { ProfileQuery } from "@/types/users";
import { Json } from "@thirdweb-dev/auth";
import { UserWithData, useUser } from "@thirdweb-dev/react";
import { createContext, use } from "react";

interface UserProviderProps {
    children: React.ReactNode,
    value: {
      user: UserWithData<Json, Json> | undefined,
      isLoading: boolean,
      isLoggedIn: boolean
    }
}

type UserContextProps = {
  user: UserWithData<Json, Json> | undefined,
  isLoading: boolean,
  isLoggedIn: boolean
}

const UserContext = createContext<UserContextProps>({ user: undefined, isLoading: false, isLoggedIn: false });

export default function UserProvider({ children }: { children: React.ReactNode }) {
  const user = useUser() 

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const user = use(UserContext);

  if (user === undefined) {
    throw new Error(
      "The user context is undefined, wrap in UserContext.Provider"
    );
  }

  return user as ProfileQuery;
}
