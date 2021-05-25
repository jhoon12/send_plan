import React from "react";
import * as S from "./style";
import CalendarMap from "./CalendarMap";
import DayOfWeek from "./DayOfWeek";

interface Props {
  setModalData: (date: string) => void;
}
const Calendar: React.FC<Props> = ({ setModalData }) => {
  return (
    <>
      <S.Header>
        <DayOfWeek />
      </S.Header>
      <S.Body>
        <CalendarMap setModalData={setModalData} />
      </S.Body>
    </>
  );
};
export default Calendar;
