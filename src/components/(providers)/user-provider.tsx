"use client";

import { ProfileQuery } from "@/types/users";
import { Json } from "@thirdweb-dev/auth";
import { UserWithData, useUser } from "@thirdweb-dev/react";
import { Dispatch, SetStateAction, createContext, use, useMemo, useState } from "react";

type UserContextProps = {
  user: UserWithData<Json, Json> | undefined;
  isLoading: boolean;
  isLoggedIn: boolean;
  refreshAvatar: string;
  setRefreshAvatar: Dispatch<SetStateAction<string>>;
};

const UserContext = createContext<UserContextProps | undefined>(undefined);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useUser();
  const [refreshAvatar, setRefreshAvatar] = useState<string>("initial");

  // Memoize the user value
  const userMemo = useMemo(() => {
    return {
      user: user.user,
      isLoading: user.isLoading,
      isLoggedIn: user.isLoggedIn,
      refreshAvatar: refreshAvatar,
      setRefreshAvatar: setRefreshAvatar,
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
  }, [user, user?.refreshAvatar]);

  return userContextValue as ProfileQuery;
}
