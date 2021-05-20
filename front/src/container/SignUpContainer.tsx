import React, { Reducer, useCallback, useState } from "react";
import SignUp from "../components/SignUp/SignUp/SignUp";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { signUpHandlerApi } from "../lib/api/SignUp";
import { SignUpDataInterface } from "../hooks/type/user";
import { ReducerType } from "../redux/store";
import { CheckEmail } from "../lib/utils";

const SignUpContainer = () => {
  const history = useHistory();
  const { email } = useSelector((store: ReducerType) => store.SignUpState);
  const [userSignUpData, setUserSignUpData] = useState<SignUpDataInterface>({
    id: "",
    pw: "",
    pwCheck: ""
  });
  const goToCheckEmail = useCallback(async () => {
    if (userSignUpData.pw === userSignUpData.pwCheck && CheckEmail(email)) {
      try {
        await signUpHandlerApi(email, userSignUpData.id, userSignUpData.pw);
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
      email={email}
      goToCheckEmail={goToCheckEmail}
      setUserSignUpData={setUserSignUpData}
      userSignUpData={userSignUpData}
    />
  );
};
export default SignUpContainer;
