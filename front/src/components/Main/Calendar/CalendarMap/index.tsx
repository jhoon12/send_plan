import React from "react";
import { useSelector } from "react-redux";
import useReadImageCase from "../../../../hooks/useCase/readImage/useReadImageUseCase";
import { addZeroFunc } from "../../../../lib/utils";
import { ReducerType } from "../../../../redux/store";
import DayBox from "./DayBox";
import * as S from "./style";
interface Props {
  setModalData: (date: string, img: string | void) => void;
}

const CalendarMap: React.FC<Props> = ({ setModalData }) => {
  const { setData } = useSelector((store: ReducerType) => store.CalendarState);
  const { readImageDate } = useReadImageCase();
  return (
    <>
      {setData.map((ele, index: number) => (
        <S.Week key={index}>
          {ele.map((ele, index: number) => {
            return (
              <DayBox
                key={index}
                dayData={ele}
                setModalData={setModalData}
                readImageDate={
                  readImageDate(addZeroFunc(ele.year, ele.month, ele.date))
                }
              />
            );
          })}
        </S.Week>
      ))}
    </>
  );
};
export default CalendarMap;
