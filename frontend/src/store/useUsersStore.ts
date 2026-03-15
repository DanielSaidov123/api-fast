import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  deleteUser,
  getUsers,
  updateUser,
  userByID,
} from "../service/usersService";

export interface UpdateUserData {
  fullName?: string;
  email?: string;
  role?: "admin" | "user";
}

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
  userID: User | null;
  loading: boolean;
  error: string | null;
  users: User[];

  getUserByID: (id: string) => Promise<void>;
  getAllUsers: () => Promise<void>;
  deleteUserByID: (id: string) => Promise<void>;
  updateUserByID: (id: string, data: UpdateUserData) => Promise<void>;
}
export const useUsersSrore = create<AuthState>()(
  persist(
    (set, get) => ({
      userID: null,
      loading: false,
      error: null,
      users: [],
      getUserByID: async (id) => {
        set({ loading: true, error: null });

        const result = await userByID(id);
        if (result.success) {
          set({ userID: result.user, loading: false });
        } else {
          set({ error: result.message, loading: false });
        }
      },
      getAllUsers: async () => {
        set({ loading: true, error: null });

        const result = await getUsers();

        if (result.success) {
          set({ users: result.user, loading: false });
        } else {
          set({ error: result.message, loading: false });
        }
      },
      deleteUserByID: async (id) => {
        set({ loading: true, error: null });
        const result = await deleteUser(id);
        if (result.success) {
          const updatedUsers = get().users.filter((u) => u._id !== id);
          set({ users: updatedUsers, loading: false });
        } else {
          set({ error: result.message, loading: false });
        }
      },
      updateUserByID: async (id, data) => {
        set({ loading: true, error: null });
        const result = await updateUser(id, data);
        if (result.success) {
          const updatedUsers = get().users.map((u) =>
            u._id === id ? result.user : u,
          );
          set({ users: updatedUsers, loading: false });
        } else {
          set({ error: result.message, loading: false });
        }
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
