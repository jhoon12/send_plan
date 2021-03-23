import React from "react";
import SignUpBox from "../SignUpBox/SignUpBox";
import * as S from "./style";

interface Props{
    signUpSuccess : () => void;
}

const EmailCheck:React.FC<Props> = ({signUpSuccess}) => {
  return (
    <SignUpBox>
      <S.Discrip>가입한 이메일로 전송된 코드를 입력해주세요</S.Discrip>
      <S.Input placeholder="인증번호"></S.Input>
      <S.BtnBox>
        <S.SignUpBtn onClick={signUpSuccess}>계정 생성</S.SignUpBtn>
      </S.BtnBox>
    </SignUpBox>
  );
};
export default EmailCheck;
