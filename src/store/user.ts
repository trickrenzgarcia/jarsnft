import { Json } from '@thirdweb-dev/auth';
import { UserWithData } from '@thirdweb-dev/react'
import { create } from 'zustand'

type UserStore = {
  user: UserWithData<Json, Json> | undefined;
  isLoading: boolean;
  isLoggedIn: boolean;
}

export const useUserStore = create<UserStore>((set) => ({
  user: undefined,
  isLoading: false,
  isLoggedIn: false
}))