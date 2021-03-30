import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./style";
import { ReducerType } from "../../../redux/store";
import { Today } from "../../../type/Calendar";

const Calendar = () => {
  const [today, setToday] = useState<Today>({
    date: new Date().getDate(),
    month: new Date().getMonth() + 1
  });
  console.log(today);
  const { setData } = useSelector((store: ReducerType) => store.CalendarState);
  const dayOfTheWeek: string[] = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Set"
  ];
  console.log(setData);
  return (
    <>
      <S.Header>
        {dayOfTheWeek.map((ele, index) => (
          <S.DayOfWeek key={index}>{ele}</S.DayOfWeek>
        ))}
      </S.Header>
      <S.Body>
        {setData.map((ele, index) => (
          <S.Week key={index}>
            {ele.map((ele, index) => (
              <S.DayBox key={index} dayData={ele} today={today}>
                <S.Day>{ele.date}</S.Day>
              </S.DayBox>
            ))}
          </S.Week>
        ))}
      </S.Body>
    </>
  );
};
export default Calendar;
