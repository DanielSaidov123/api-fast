import axios from "axios";
import type { UpdateUserData } from "../store/useUsersStore";

export const API = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true,
});

export const loginApi = (data: { email: string; password: string }) =>
  API.post("/auth/login", data);

export const registerApi = (data: object) =>
  API.post("/auth/register", data);

export const getUserByIdApi = (id: string) =>
  API.get(`/user/${id}`);

export const getUsersApi = ( ) =>
  API.get(`/user`);

export const deleteUserByIDApi = (id : string) =>
  API.get(`/user/${id}`);

export const updateUserApi = (id : string , data :UpdateUserData ) =>
  API.put(`/user/${id}`,data);