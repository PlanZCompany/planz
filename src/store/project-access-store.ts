import { create } from "zustand";

export type ProjectAccessUser = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "viewer";
};

type ProjectAccessStore = {
  user: ProjectAccessUser | null;
  setUser: (user: ProjectAccessUser | null) => void;
  clearUser: () => void;
};

export const useProjectAccessStore = create<ProjectAccessStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
