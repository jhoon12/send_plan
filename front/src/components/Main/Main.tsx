import React from "react";
import * as S from "./style";
import Calendar from "./Calendar/Calendar";



const Main = () => {
  return (
    <S.Body>
      <S.Header>
        <S.LogoTitle>Send Plan</S.LogoTitle>
        <S.MonthBox>
          <S.LeftDArrow />
          <S.Month>2019.01 </S.Month>
          <S.RightDArrow />
        </S.MonthBox>
      </S.Header>
      <S.MainBody>
        <Calendar />
      </S.MainBody>
    </S.Body>
  );
};
export default Main;
