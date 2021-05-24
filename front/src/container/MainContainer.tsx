import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import Main from "../components/Main/Main";
import { SettingDate } from "../hooks/type/Calendar";
import WindowCalander from "window-calander";
import { useDispatch } from "react-redux";
import { setCalendar } from "../redux/actions/Calendar";
import { setModal, setModalDate } from "../redux/actions/Modal";
import { useHistory } from "react-router";
import {
  addToDoSaga,
  readToDoImageSaga,
  setToDoData,
  SetToDoDataInterface,
  setToDoDataSaga
} from "../redux/actions/ToDoData";
import { addToDoImg } from "../lib/api/ToDo";
import { addZeroFunc } from "../lib/utils";
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
    const data = WindowCalander(date.year, date.month); //렌더링 달력 불러오기
    const start = addZeroFunc(
      data[0][0].year,
      data[0][0].month,
      data[0][0].date
    );
    const end = addZeroFunc(data[5][6].year, data[5][6].month, data[5][6].date);
    dispatch(readToDoImageSaga({ start: start, end: end }));
    dispatch(setCalendar(data));
  }, [date]);
  const nextMonth = useCallback(() => {
    date.month > 11
      ? setDate({ month: 1, year: date.year + 1 })
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
  const setModalData = useCallback((date: string) => {
    dispatchModal();
    dispatch(setModalDate(date));
    dispatch(setToDoDataSaga(date));
  }, []);
  const addToDoData = useCallback((todo: string, date: string) => {
    dispatch(addToDoSaga({ todo, date }));
  }, []);
  const addToDoClient = useCallback((todo: SetToDoDataInterface[]) => {
    dispatch(
      setToDoData([
        ...todo,
        { ToDo: "", date: " ", email: "", img: "", todoID: 0 }
      ])
    );
  }, []);
  const sendImgToSever = useCallback(
    async (e: ChangeEvent<HTMLInputElement>, date: string) => {
      await addToDoImg(e.target.files[0], date);
    },
    []
  );
  return (
    <Main
      sendImgToSever={sendImgToSever}
      setModalData={setModalData}
      goToLogin={goToLogin}
      nextMonth={nextMonth}
      date={date}
      prevMonth={prevMonth}
      dispatchModal={dispatchModal}
      addToDoData={addToDoData}
      addToDoClient={addToDoClient}
    ></Main>
  );
};
export default MainContainer;
