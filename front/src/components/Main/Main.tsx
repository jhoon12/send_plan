import React from "react";
import * as S from "./style";
import Calendar from "./Calendar/Calendar";

interface Props{
  nextMonth : () => void,
  prevMonth : () => void,
  date:{
    month:number,
    year:number
  }
}


const Main:React.FC<Props> = ({nextMonth,prevMonth, date}) => {
  return (
    <S.Body>
      <S.Header>
        <S.LogoTitle>Send Plan</S.LogoTitle>
        <S.MonthBox>
          <S.LeftDArrow onClick={prevMonth}/>
          <S.Month>{date.year}.{date.month < 10 ? `0${date.month}`: `${date.month}`} </S.Month>
          <S.RightDArrow onClick={nextMonth}/>
        </S.MonthBox>
      </S.Header>
      <S.MainBody>
        <Calendar />
      </S.MainBody>
    </S.Body>
  );
};
export default Main;
