import React, { useEffect, useState } from "react";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useSelector } from "react-redux";
import * as S from "./style";
import { ReducerType } from "../../../redux/store";
interface Props {
  returnCalendar: () => number | void;
}
const Calendar: React.FC<Props> = ({ returnCalendar }) => {
  const data = useSelector((store: ReducerType) => store.CalendarState);
  console.log(data);
  return <div>{/* {returnCalendar()} */}</div>;
};
export default Calendar;
