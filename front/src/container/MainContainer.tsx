import React, { useState, useEffect, useCallback, ChangeEvent } from "react";
import Main from "../components/Main/Main";
import { SettingDate } from "../hooks/type/Calendar";
import setWindowCalander, { WindowCalander } from "window-calander";
import { useDispatch } from "react-redux";
import { setCalendar } from "../redux/actions/Calendar";
import { setModal, setModalDate, setModalImg } from "../redux/actions/Modal";
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
import { History } from "history";
const MainContainer = () => {
  const history: History = useHistory();
  const dispatch = useDispatch();
  const [date, setDate] = useState<SettingDate>({ month: 0, year: 0 });
  useEffect(() => {
    setDate({
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()
    });
  }, []);
  useEffect(() => {
    const data: WindowCalander = setWindowCalander(date.year, date.month); //렌더링 달력 불러오기
    const start: string = addZeroFunc(
      data[0][0].year,
      data[0][0].month,
      data[0][0].date
    );
    const end: string = addZeroFunc(
      data[5][6].year,
      data[5][6].month,
      data[5][6].date
    );
    dispatch(readToDoImageSaga({ start: start, end: end }));
    dispatch(setCalendar(data));
  }, [date]);
  const nextMonth = useCallback((): void => {
    date.month > 11
      ? setDate({ month: 1, year: date.year + 1 })
      : setDate({ month: date.month + 1, year: date.year });
  }, [date]);
  const prevMonth = useCallback((): void => {
    date.month < 2
      ? setDate({ month: 12, year: date.year - 1 })
      : setDate({ month: date.month - 1, year: date.year });
  }, [date]);
  const dispatchModal = useCallback((): void => {
    dispatch(setModal());
  }, [setModal]);
  const goToLogin = useCallback((): void => {
    history.push("/");
  }, []);
  const setModalData = useCallback((date: string, img: string | void): void => {
    dispatchModal();
    dispatch(setModalDate(date));
    dispatch(setToDoDataSaga(date));
    if (img) dispatch(setModalImg(img));
  }, []);
  const addToDoData = useCallback((todo: string, date: string): void => {
    dispatch(addToDoSaga({ todo, date }));
  }, []);
  const addToDoClient = useCallback((todo: SetToDoDataInterface[]): void => {
    dispatch(
      setToDoData([
        ...todo,
        { ToDo: "", date: " ", email: "", img: "", todoID: 0 }
      ])
    );
  }, []);
  const sendImgToSever = useCallback(
    async (e: ChangeEvent<HTMLInputElement>, date: string): Promise<void> => {
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
