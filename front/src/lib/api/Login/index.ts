import apiDefault from "../index";
import { LoginResponse } from "../../payloads/login";
export const loginHandlerApi = async (id: string, pw: string) => {
  const res = await apiDefault().post<LoginResponse>("/user/login", { id, pw });
  return res.data;
};

export const refreshTokenApi = async () => {
  try {
    const res = await apiDefault().get("/user/refresh", {
      //리턴 타입 지정
      headers: { "refresh-token": localStorage.getItem("refreshToken") }
    });
    localStorage.setItem("accessToken", res.data.accessToken);
    return res.data;
  } catch (err) {
    console.log(err);
    alert("세션이 만료되었습니다. F5를 눌러 페이지를 새로고침 해주세요.");
  }
};
