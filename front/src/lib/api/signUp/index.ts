import apiDefault from "../index";
import { ResDefault } from "../../payloads";
export const signUpHandlerApi = async (
  email: string,
  id: string,
  pw: string
) => {
  return await apiDefault().post<ResDefault>("/user/signUp", {
    email,
    id,
    pw
  });
};

export const certifyEmailApi = async (code: number, email: string) => {
  return await apiDefault().post<ResDefault>("/user/emailCode", {
    email,
    reqCode: code
  });
};
