import React, { useState, useEffect, useCallback } from "react";
import Main from "../components/Main/Main";
import { SettingDate, Date } from "../hooks/type/Calendar";
import WindowCalander from "window-calander";
import { useDispatch } from "react-redux";
import { setCalendar } from "../redux/actions/Calendar";
import { setModal } from "../redux/actions/Modal";
import { useHistory } from "react-router";
const MainContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [date, setDate] = useState<SettingDate>({ month: 0, year: 0 });
  useEffect(() => {
    setDate({
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    });
  }, []);
  useEffect(() => {
    const data = WindowCalander(date.year, date.month);
    dispatch(setCalendar(data));
  }, [date]);
  const nextMonth = useCallback(() => {
    date.month > 11
      ? setDate({ month: 1, year: date.year + 1 }) //12월 넘어가면
      : setDate({ month: date.month + 1, year: date.year });
  }, [date]);
  const prevMonth = useCallback(() => {
    date.month < 2
      ? setDate({ month: 12, year: date.year - 1 })
      : setDate({ month: date.month - 1, year: date.year });
  }, [date]);
  const dispatchModal = useCallback(() => {
    dispatch(setModal());
  }, [setModal]);
  const goToLogin = useCallback(() => {
    history.push("/");
  }, []);
  return (
    <Main
      goToLogin={goToLogin}
      nextMonth={nextMonth}
      date={date}
      prevMonth={prevMonth}
      dispatchModal={dispatchModal}
    ></Main>
  );
};
export default MainContainer;
