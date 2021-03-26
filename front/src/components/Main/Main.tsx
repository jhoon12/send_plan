import React from "react";
import * as S from "./style";
import "react-calendar/dist/Calendar.css";
import Calendar from "./Calendar/Calendar";
// import {AiFillCaretRight} from 'react-icons/ai';
const Main = () => {
  return (
    <S.Body>
      <S.Header>
        {/* <AiFillCaretRight/> */}
        <S.arrow></S.arrow>
        <S.LogoTitle >Send Plan</S.LogoTitle>
      </S.Header>
      <Calendar />
    </S.Body>
  );
};
export default Main;
