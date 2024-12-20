import { Json } from "@thirdweb-dev/auth";
import { ThirdwebAuthUser } from "@thirdweb-dev/auth/next";
import { Dispatch, SetStateAction } from "react";

/**
 * The Profile type is a custom type for the Session/ ProfileProvider or UserProvider
 *
 * ```jsx
 * import { useUser } from "@thirdweb-dev/react";
 *
 * const { user, isLoggedIn, isLoading } = useUser() as ProfileQuery;
 * ```
 *
 * @type Profile or User
 *
 */
export type Profile = {
  address: string;
  data: ProfileData;
  session: ApiProfile;
};

/**
 * This is a custom types for useUser() from @thirdweb-dev/react
 *
 * ```jsx
 * import { useUser } from "@thirdweb-dev/react";
 *
 * const { user, isLoggedIn, isLoading } = useUser() as ProfileQuery;
 * ```
 *
 * @type ProfileQuery
 *
 */
export type ProfileQuery = {
  user: Profile;
  isLoading: boolean;
  isLoggedIn: boolean;
  refreshAvatar: string;
  setRefreshAvatar: Dispatch<SetStateAction<string>>;
};

export type ApiProfile = {
  uid: string;
  name: string;
  email: string;
  isListed: boolean;
  role: "user" | "admin";
  createAt: string;
};

export type ProfileData = {
  address: string;
  session: ApiProfile;
};

export type AuthUser = ThirdwebAuthUser<Json, ApiProfile>;

//# sourceMappingURL=users.ts.map
