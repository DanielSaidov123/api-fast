import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginService, registerServis } from "../service/authService";
import { useUsersSrore } from "./useUsersStore";
interface User {
  _id: string;
  fullName: string;
  email: string;
  role: "admin" | "user";
  post: [];
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  registerStore: (
    fullName: string,
    email: string,
    password: string,
    role: string,
  ) => Promise<void>;
  logout: () => void;
}
export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      login: async (email, password) => {
        set({ loading: true, error: null });

        const result = await loginService(email, password);

        if (result.success) {
          set({ user: result.user.user, loading: false });
        } else {
          set({ error: result.message, loading: false });
        }
      },

      registerStore: async (fullName, email, password, role) => {
        set({ loading: true, error: null });

        const result = await registerServis(fullName, email, password, role);

        if (result.success) {
    set({ loading: false });
    
    const addUserToList = useUsersSrore.getState().users;
    useUsersSrore.setState({
      users: [...addUserToList, result.user], 
    });
        } else {
          set({ error: result.message, loading: false });
        }
      },

      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
    },
  ),
);
