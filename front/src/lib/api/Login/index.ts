import apiDefault from "../index";
import { LoginResponse } from "../../payloads/login";
export const loginHandlerApi = async (id: string, pw: string) => {
  const res = await apiDefault().post<LoginResponse>("/user/login", { id, pw });
  return res.data;
};

