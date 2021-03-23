import React from "react";
import * as S from "./style";
interface Props {
  children: React.ReactNode;
}
const SignUpBox: React.FC<Props> = ({ children }) => {
  return (
    <>
      <S.Body>
        <S.Title>Send Plan</S.Title>
        <S.Box>
          <S.InputBox>{children}</S.InputBox>
        </S.Box>
      </S.Body>
    </>
  );
};
export default SignUpBox;
