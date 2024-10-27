import { create } from "zustand";

interface UserStore {
  currentUser?: any;
  setUser: (user: any) => void;
}

export const useUserStore = create<UserStore>(set => ({
  currentUser: undefined,
  setUser: (user: any) => set({ currentUser: user })
}));
