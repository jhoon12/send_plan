import React, { useState, useEffect, useCallback } from "react";
import Main from "../components/Main/Main";
import { SettingDate, Date } from "../type/Calendar";
import WindowCalander from "window-calander";
const MainContainer = () => {
  const [date, setDate] = useState<SettingDate>({ date: 0, year: 0 });
  const [calendarData, setCalendarData] = useState<Date[][]>([[]]);
  useEffect(() => {
    setDate({ date: new Date().getDate(), year: new Date().getFullYear() });
  }, []);
  useEffect(() => {
    const data = WindowCalander(date.date, date.year);
    setCalendarData(data);
  }, [date]);
  useEffect(() => {
    console.log(calendarData);
  }, [calendarData]);
  const returnCalendar = useCallback(() => {
    calendarData.length > 0
      ? calendarData.map(ele => {
          return ele.map(ele => {
            console.log(ele);
            return <div>{ele.date}</div>;
          });
        })
      : null;
  }, []);
  return <Main></Main>;
};
export default MainContainer;
