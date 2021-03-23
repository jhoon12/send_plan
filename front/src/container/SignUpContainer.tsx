import React, { useCallback } from "react";
import SignUp from "../components/SignUp/SignUp/SignUp";
import {useHistory} from 'react-router-dom';
const SignUpContainer = () => {
  const history = useHistory();
  const goToCheckEmail = useCallback(() => {history.push('/signUp/checkEm')}, []);
  return <SignUp goToCheckEmail={goToCheckEmail} />;
};
export default SignUpContainer;
