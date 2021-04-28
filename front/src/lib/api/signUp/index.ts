import apiDefault from "../index";

export const signUpHandlerApi = async (
  email: string,
  id: string,
  pw: string
) => {
  const res = await apiDefault().post("/user/signUp", { email, id, pw });
  return res.data;
};
