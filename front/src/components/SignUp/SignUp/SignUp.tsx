import React from "react";
import * as S from "./style";
import SignUpBox from "../SignUpBox/SignUpBox";
interface Props {
  goToCheckEmail: () => void;
}
const SignUp: React.FC<Props> = ({ goToCheckEmail }) => {
  return (
    <>
      <SignUpBox>
        <S.Input placeholder="이메일"></S.Input>
        <S.Input placeholder="아이디"></S.Input>
        <S.Input placeholder="비밀번호"></S.Input>
        <S.Input placeholder="비밀번호 확인"></S.Input>
        <S.BtnBox>
          <S.SignUpBtn onClick={goToCheckEmail}>계정 생성</S.SignUpBtn>
        </S.BtnBox>
      </SignUpBox>
    </>
  );
};
export default SignUp;
