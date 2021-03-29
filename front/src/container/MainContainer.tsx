import React, { useState, useEffect, useCallback } from "react";
import Main from "../components/Main/Main";
import { SettingDate, Date } from "../type/Calendar";
import WindowCalander from "window-calander";
import {useDispatch} from 'react-redux';
import {setCalendar} from '../redux/actions/Calendar';
const MainContainer = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState<SettingDate>({ month: 0, year: 0 });
  const [calendarData, setCalendarData] = useState<Date[][]>([[]]);
  useEffect(() => {
    setDate({ month: new Date().getMonth()+1, year: new Date().getFullYear() });
  }, []);
  useEffect(() => {
    const data = WindowCalander(date.year, date.month);
    dispatch(setCalendar(data));
    // setCalendarData(data);
  }, [date]);
  // useEffect(() => {
  //   console.log(calendarData);
  // }, [calendarData]);
  const returnCalendar = useCallback(() => {
    console.log(calendarData)
  }, [calendarData]);
  return <Main returnCalendar={returnCalendar}></Main>;
};
export default MainContainer;
