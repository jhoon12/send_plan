import React from "react";
import * as S from "./style";
import Calendar from "./Calendar/Calendar";

interface Props{
  returnCalendar : () =>number | void
}

const Main:React.FC<Props> = ({returnCalendar}) => {
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
        <Calendar returnCalendar={returnCalendar}/>
      </S.MainBody>
    </S.Body>
  );
};
export default Main;
