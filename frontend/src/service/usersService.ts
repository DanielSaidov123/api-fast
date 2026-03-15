import axios from "axios";
import { deleteUserByIDApi, getUserByIdApi, getUsersApi, updateUserApi  } from "../api/axios";

export interface UpdateUserData {
  fullName?: string;
  email?: string;
  role?: "admin" | "user";
}
export async function userByID(id : string) {
  try {
    const res = await getUserByIdApi(id);

    return {
      success: true,
      user: res.data,
    };

  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.response?.data?.message || "login error"
      : "unexpected error";

    return { success: false, message };
  }
}
export async function getUsers( ) {
  try {
    const res = await getUsersApi();

    return {
      success: true,
      user: res.data,
    };

  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.response?.data?.message || "login error"
      : "unexpected error";

    return { success: false, message };
  }
}

export async function deleteUser(id:string ) {
  try {
    const res = await deleteUserByIDApi(id);

    return {
      success: true,
      user: res.data,
    };

  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.response?.data?.message || "login error"
      : "unexpected error";

    return { success: false, message };
  }
}

export async function updateUser(
  id: string,
  data: UpdateUserData
) {
  try {
    const res = await updateUserApi(id, data); 
    return { success: true, user: res.data };
  } catch (error) {
    const message = axios.isAxiosError(error)
      ? error.response?.data?.message || "update error"
      : "unexpected error";
    return { success: false, message };
  }
}
