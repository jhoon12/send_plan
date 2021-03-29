import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./style";
import { ReducerType } from "../../../redux/store";

const Calendar = () => {
  const data = useSelector((store: ReducerType) => store.CalendarState);
  console.log(data);
  return <div>{/* {returnCalendar()} */}</div>;
};
export default Calendar;
