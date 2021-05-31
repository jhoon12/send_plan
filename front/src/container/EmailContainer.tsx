import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import EmailCheck from "../components/SignUp/EmailCheck/EmailCheck";
import { certifyEmailApi } from "../lib/api/signUp";
import { useSelector } from "react-redux";
import { ReducerType } from "../redux/store";
import { History } from "history";
import { ResDefault } from "../lib/payloads";
import { AxiosResponse } from "axios";
const EmailContainer = () => {
  const history: History = useHistory();
  const { email }: { email: string } = useSelector(
    (store: ReducerType) => store.SignUpState
  );
  const [certifyCode, setCertifyConde] = useState<number>(0);
  const signUpSuccess = useCallback(async () => {
    try {
      const res: AxiosResponse<ResDefault> = await certifyEmailApi(
        certifyCode,
        email
      );
      if (res.data.code === 200) history.push("/main");
    } catch (err) {
      if (err.response.status === 401) alert("인증번호가 다릅니다.");
    }
  }, [certifyCode]);
  return (
    <EmailCheck
      signUpSuccess={signUpSuccess}
      setCertifyConde={setCertifyConde}
    />
  );
};
export default EmailContainer;
