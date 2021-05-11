import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./style";
import { ReducerType } from "../../../redux/store";
import { Today } from "../../../hooks/type/Calendar";
import { addZeroFunc } from "../../../lib/utils";
interface Props {
  dispatchModal: (date: string) => void;
}

const Calendar: React.FC<Props> = ({ dispatchModal }) => {
  const [today, setToday] = useState<Today>({
    date: new Date().getDate(),
    month: new Date().getMonth() + 1
  });
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
  return (
    <>
      <S.Header>
        {dayOfTheWeek.map((ele, index) => (
          <S.DayOfWeek key={index}>{ele}</S.DayOfWeek>
        ))}
      </S.Header>
      <S.Body>
        {setData.map((ele, index: number) => (
          <S.Week key={index}>
            {ele.map((ele, index) => (
              <S.DayBox
                key={index}
                dayData={ele}
                today={today}
                onClick={() =>
                  dispatchModal(addZeroFunc(ele.year, ele.month, ele.date))
                }
              >
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
