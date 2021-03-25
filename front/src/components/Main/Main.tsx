import React from "react";
import * as S from "./style";
import "react-calendar/dist/Calendar.css";
import Calendar from "./Calendar/Calendar";
const Main = () => {
  return (
    <S.Body>
      <S.Header>
        <S.LogoTitle >Send Plan</S.LogoTitle>
      </S.Header>
      <Calendar />
    </S.Body>
  );
};
export default Main;
