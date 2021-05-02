import apiDefault from "../index";

export const signUpHandlerApi = async (
  email: string,
  id: string,
  pw: string
) => {
  const res = await apiDefault().post("/user/signUp", { email, id, pw });
  return res.data;
};

export const certifyEmailApi = async (code: number, email: string) => {
  const res = await apiDefault().post("/user/emailCode", {
    email,
    reqCode: code
  });
  return res.data;
};
