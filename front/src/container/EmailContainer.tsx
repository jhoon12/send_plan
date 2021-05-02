import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import EmailCheck from "../components/SignUp/EmailCheck/EmailCheck";
const EmailContainer = () => {
  const history = useHistory();
  const [certifyCode, setCertifyConde] = useState<number>(0);
  const signUpSuccess = useCallback(() => {
    
    history.push("/main");
  }, [certifyCode]);
  return (
    <EmailCheck
      signUpSuccess={signUpSuccess}
      setCertifyConde={setCertifyConde}
    />
  );
};
export default EmailContainer;
