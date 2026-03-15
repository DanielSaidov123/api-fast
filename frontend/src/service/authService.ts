import axios from "axios";
import { loginApi, registerApi } from "../api/axios";

export async function loginService(email: string, password: string) {
  try {
    const res = await loginApi({ email, password });

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

export async function registerServis(fullName :string,email: string, password: string , role:string) {
  try {
    await registerApi({ fullName , email , password , role});

    return {
      success: true,
    };

  } catch (error) {
    const message = axios.isAxiosError(error)
      ?error.response?.data?.message || "rgister error"
      : "unexpected error";

    return { success: false, message };
  }
}

