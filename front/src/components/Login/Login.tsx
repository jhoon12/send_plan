import React from "react";
import * as S from "./style";

interface Props {

  goToSignUp: () => void;
  setUserLoginData: (userData: { id: string; pw: string }) => void;
  userLoginData: { id: string; pw: string };
  loginBtnHandler: () => void;
}

const Login: React.FC<Props> = ({

  goToSignUp,
  setUserLoginData,
  userLoginData,
  loginBtnHandler
}) => {
  return (
    <S.Body>
      <S.MainImgBox />
      <S.LoginBox>
        <S.LoginTitle>Send Plan</S.LoginTitle>
        <S.LoginInput
          placeholder="아이디"
          onChange={e =>
            setUserLoginData({ ...userLoginData, id: e.target.value })
          }
          value={userLoginData.id}
        />
        <S.LoginInput
          placeholder="비밀번호"
          onChange={e =>
            setUserLoginData({ ...userLoginData, pw: e.target.value })
          }
          value={userLoginData.pw}
        />
        <S.GoToSignUp onClick={goToSignUp}>
          아직 아이디가 없으신가요?
        </S.GoToSignUp>
        <S.LoginBtn onClick={loginBtnHandler}>로그인</S.LoginBtn>
      </S.LoginBox>
    </S.Body>
  );
};
export default Login;
