import React, { useCallback, useState } from "react";
import Login from "../components/Login/Login";
import { useHistory } from "react-router-dom";
import { loginHandlerApi } from "../lib/api/Login";
import { LoginResponse } from "../lib/payloads/login";
const LoginContainer = () => {
  const [userLoginData, setUserLoginData] = useState<{
    id: string;
    pw: string;
  }>({ id: "", pw: "" });
  const history = useHistory();
  const goToSignUp = useCallback(() => {
    history.push("/signUp");
  }, []);
  const loginBtnHandler = useCallback(async () => {
    try {
      const res: LoginResponse = await loginHandlerApi(
        userLoginData.id,
        userLoginData.pw
      );
      console.log(res);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      history.push("/main");
    } catch (err) {
      if (err.response.status === 404) alert("없는 유저입니다.");
      console.log(err);
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
