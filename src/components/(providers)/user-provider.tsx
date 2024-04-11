"use client";

import { ProfileQuery } from "@/types/users";
import { Json } from "@thirdweb-dev/auth";
import { UserWithData, useUser } from "@thirdweb-dev/react";
import { createContext, use, useMemo } from "react";

type UserContextProps = {
  user: UserWithData<Json, Json> | undefined;
  isLoading: boolean;
  isLoggedIn: boolean;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUser();

  // Memoize the user value
  const userMemo = useMemo(() => {
    return {
      user: user.user,
      isLoading: user.isLoading,
      isLoggedIn: user.isLoggedIn,
    };
  }, [user]);

  return (
    <UserContext.Provider value={userMemo}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  const user = use(UserContext);

  // Memoize the returned value
  const userContextValue = useMemo(() => {
    if (user === undefined) {
      throw new Error(
        "The user context is undefined, wrap in UserContext.Provider",
      );
    }

    return user as ProfileQuery;
  }, [user]);

  return userContextValue as ProfileQuery;
}
