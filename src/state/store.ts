import { create } from "zustand";

type User = {
  email?: string;
  address?: string;
};

interface UserState {
  user: User;
  getUser: () => User;
  setUser: (user: User) => void;
}

export const useUserState = create<UserState>((set, get) => ({
  user: {
    email: undefined,
    address: undefined,
  },
  getUser: () => get().user,
  setUser: (user: User) =>
    set((state: UserState) => {
      return { ...state, user };
    }),
}));
