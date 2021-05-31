import React from "react";
import * as S from "./style";
import SignUpBox from "../SignUpBox/SignUpBox";
import { useDispatch } from "react-redux";
import { SignUpDataInterface } from "../../../hooks/type/user";
import { setEmail } from "../../../redux/actions/SignUp";
interface Props {
  goToCheckEmail: () => void;
  userSignUpData: SignUpDataInterface;
  setUserSignUpData: (signUpData: SignUpDataInterface) => void;
  email: string;
}
const SignUp: React.FC<Props> = ({
  goToCheckEmail,
  userSignUpData,
  setUserSignUpData,
  email
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <SignUpBox>
        <S.Input
          placeholder="이메일"
          value={email}
          onChange={e => {
            dispatch(setEmail(e.target.value));
          }}
        ></S.Input>
        <S.Input
          placeholder="아이디"
          value={userSignUpData.id}
          onChange={e => {
            setUserSignUpData({ ...userSignUpData, id: e.target.value });
          }}
        ></S.Input>
        <S.Input
          placeholder="비밀번호"
          value={userSignUpData.pw}
          onChange={e => {
            setUserSignUpData({ ...userSignUpData, pw: e.target.value });
          }}
        ></S.Input>
        <S.Input
          placeholder="비밀번호 확인"
          value={userSignUpData.pwCheck}
          onChange={e => {
            setUserSignUpData({ ...userSignUpData, pwCheck: e.target.value });
          }}
        ></S.Input>
        <S.BtnBox>
          <S.SignUpBtn onClick={goToCheckEmail}>계정 생성</S.SignUpBtn>
        </S.BtnBox>
      </SignUpBox>
    </>
  );
};
export default SignUp;
