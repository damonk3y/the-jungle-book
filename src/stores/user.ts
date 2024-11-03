import { create } from "zustand";

interface UserStore {
  currentUser?: unknown;
  setUser: (user: unknown) => void;
}

export const useUserStore = create<UserStore>(set => ({
  currentUser: undefined,
  setUser: (user: unknown) => set({ currentUser: user })
}));
