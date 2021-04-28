import React, { useCallback, useState } from "react";
import SignUp from "../components/SignUp/SignUp/SignUp";
import { useHistory } from "react-router-dom";
import { signUpHandlerApi } from "../lib/api/SignUp";
import { SignUpDataInterface } from "../hooks/type/user";
const SignUpContainer = () => {
  const history = useHistory();
  const [userSignUpData, setUserSignUpData] = useState<SignUpDataInterface>({
    email: "",
    id: "",
    pw: "",
    pwCheck: ""
  });
  const goToCheckEmail = useCallback(async () => {
    if (userSignUpData.pw === userSignUpData.pwCheck) {
      try {
        const res = await signUpHandlerApi(
          userSignUpData.email,
          userSignUpData.id,
          userSignUpData.pw
        );
        console.log(res)
        history.push("/signUp/checkEm");
      } catch (err) {
        console.log(err);
      }
    }
    else{
      alert('비밀번호가 서로 다릅니다')
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
