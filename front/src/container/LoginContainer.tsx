import React, { useCallback, useState } from "react";
import Login from "../components/Login/Login";
import { useHistory } from "react-router-dom";
import { loginHandlerApi } from "../lib/api/Login";
import { LoginResponse } from "../lib/payloads/login";
import { History } from 'history';
const LoginContainer = () => {
  const [userLoginData, setUserLoginData] = useState<{
    id: string;
    pw: string;
  }>({ id: "", pw: "" });
  const history : History = useHistory();
  const goToSignUp = useCallback((): void => {
    history.push("/signUp");
  }, []);
  const loginBtnHandler = useCallback(async (): Promise<void> => {
    try {
      const res: LoginResponse = await loginHandlerApi(
        userLoginData.id,
        userLoginData.pw
      );
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      history.push("/main");
    } catch (err) {
      if (err.response.status === 404) alert("없는 유저입니다.");
    }
  }, [userLoginData]);
  return (
    <Login
      loginBtnHandler={loginBtnHandler}
      goToSignUp={goToSignUp}
      setUserLoginData={setUserLoginData}
      userLoginData={userLoginData}
    />
  );
};
export default LoginContainer;
