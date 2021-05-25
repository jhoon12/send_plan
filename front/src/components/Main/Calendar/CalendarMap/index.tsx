import React from "react";
import { useSelector } from "react-redux";
import { ReducerType } from "../../../../redux/store";
import DayBox from "./DayBox";
import * as S from "./style";
interface Props {
  setModalData: (date: string) => void;
}

const CalendarMap: React.FC<Props> = ({ setModalData }) => {
  const { setData } = useSelector((store: ReducerType) => store.CalendarState);
  const { imageDateArr} = useSelector(
    (store: ReducerType) => store.ToDoDataState
  );

  return (
    <>
      {setData.map((ele, index: number) => (
        <S.Week key={index}>
          {ele.map((ele, index: number) => (
            <DayBox key={index} dayData={ele} setModalData={setModalData} />
          ))}
        </S.Week>
      ))}
    </>
  );
};
export default CalendarMap;
