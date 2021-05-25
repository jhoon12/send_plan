import React from "react";
import * as S from "./style";
const dayOfTheWeek: string[] = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Set"
];
const DayOfWeek = () => {
  return (
    <>
      {dayOfTheWeek.map((ele, index) => (
        <S.DayOfWeek key={index}>{ele}</S.DayOfWeek>
      ))}
    </>
  );
};
export default DayOfWeek;
