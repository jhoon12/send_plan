import apiDefault from "../index";
import { ResDefault } from "../../payloads";
export const signUpHandlerApi = async (
  email: string,
  id: string,
  pw: string
) => {
  const res = await apiDefault().post<ResDefault>("/user/signUp", {
    email,
    id,
    pw
  });
  return res.data;
};

export const certifyEmailApi = async (code: number, email: string) => {
  const res = await apiDefault().post<ResDefault>("/user/emailCode", {
    email,
    reqCode: code
  });
  return res.data;
};
