/**
 * The Profile type is a custom type for the Session/ ProfileProvider
 * 
 * ```jsx
 * import { useUser } from "@thirdweb-dev/react";
 *   
 * const { user, isLoggedIn, isLoading } = useUser() as ProfileQuery;
 * ```
 *
 * @type Profile
 *
 */
export type Profile = {
    address: string;
    data: ProfileData;
    session: ApiProfile;
}

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
}

export type ApiProfile = {
  name: string;
  email: string;
  is_listed: boolean;
  create_at: string;
}

export type ProfileData = {
  address: string;
  session: ApiProfile;
};

//# sourceMappingURL=users.ts.map