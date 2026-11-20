import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AppState {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  setUser: (user: AppState['user']) => void;
  clearUser: () => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set({ user }),
        clearUser: () => set({ user: null }),
      }),
      {
        name: 'app-storage',
      }
    )
  )
);
