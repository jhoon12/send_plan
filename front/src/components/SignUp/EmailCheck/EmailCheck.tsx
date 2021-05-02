import React from "react";
import SignUpBox from "../SignUpBox/SignUpBox";
import * as S from "./style";

interface Props {
  signUpSuccess: () => void;
  setCertifyConde: (code: number) => void;
}

const EmailCheck: React.FC<Props> = ({ signUpSuccess, setCertifyConde }) => {
  return (
    <SignUpBox>
      <S.Discrip>가입한 이메일로 전송된 코드를 입력해주세요</S.Discrip>
      <S.Input
        placeholder="인증번호"
        type="number"
        onChange={e => {
          setCertifyConde(e.target.valueAsNumber);
        }}
      ></S.Input>
      <S.BtnBox>
        <S.SignUpBtn onClick={signUpSuccess}>계정 생성</S.SignUpBtn>
      </S.BtnBox>
    </SignUpBox>
  );
};
export default EmailCheck;
