import React from "react";
import * as S from "./style";

interface Props{
  goToMain : ()=>void;
  goToSignUp : ()=>void;
}

const Login:React.FC<Props>= () => {
  return (
    <S.Body>
      <S.MainImgBox />
      <S.LoginBox>
        <S.LoginTitle>Login</S.LoginTitle>
        <S.LoginInput placeholder="아이디"/>
        <S.LoginInput placeholder="비밀번호"/>
        <S.GoToSignUp>아직 아이디가 없으신가요?</S.GoToSignUp>    
        <S.LoginBtn >로그인</S.LoginBtn>
      </S.LoginBox>
    
    </S.Body>
  );
};
export default Login;
