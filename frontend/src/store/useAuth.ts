import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    user: { role: "user" | "admin" } | null;
    loginUser: (role: "user" | "admin") => void;
    logout: () => void;
}

export const useAuth = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            loginUser: (role) => set({ user: { role } }),
            logout: () => set({ user: null }),
        }),
        {
            name: "auth-storage",
            partialize: (state) => ({ user: state.user }),
        },
    ),
);