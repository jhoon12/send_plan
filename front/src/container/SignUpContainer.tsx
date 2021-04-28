import React, { useCallback, useState } from "react";
import SignUp from "../components/SignUp/SignUp/SignUp";
import { useHistory } from "react-router-dom";
import { signUpHandlerApi } from "../lib/api/SignUp";
import { SignUpDataInterface } from "../hooks/type/user";

const CheckEmail = (email: string) => {
  const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!reg_email.test(email)) return false;
  else return true;
};

const SignUpContainer = () => {
  const history = useHistory();
  const [userSignUpData, setUserSignUpData] = useState<SignUpDataInterface>({
    email: "",
    id: "",
    pw: "",
    pwCheck: ""
  });
  const goToCheckEmail = useCallback(async () => {
    if (
      userSignUpData.pw === userSignUpData.pwCheck &&
      CheckEmail(userSignUpData.email)
    ) {
      try {
        const res = await signUpHandlerApi(
          userSignUpData.email,
          userSignUpData.id,
          userSignUpData.pw
        );
        console.log(res);
        history.push("/signUp/checkEm");
      } catch (err) {
        console.log(err);
        if (err.response.status === 400) alert("이미 존재하는 계정입니다.");
      }
    } else {
      alert("비밀번호가 서로 다르거나 메일 양식이 틀립니다");
    }
  }, [userSignUpData]);

  return (
    <SignUp
      goToCheckEmail={goToCheckEmail}
      setUserSignUpData={setUserSignUpData}
      userSignUpData={userSignUpData}
    />
  );
};
export default SignUpContainer;
