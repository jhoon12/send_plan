import React, { useState } from "react";
import { Today } from "../../../../../hooks/type/Calendar";
import { addZeroFunc } from "../../../../../lib/utils";
import { CalendarData } from "../../../../../redux/actions/Calendar";
import * as S from "./style";

interface Props {
  key: number;
  dayData: CalendarData;
  readImageDate: string | void;
  setModalData: (date: string, img: string | void) => void;
}

const DayBox: React.FC<Props> = ({
  key,
  dayData,
  setModalData,
  readImageDate
}) => {
  const [today, setToday] = useState<Today>({
    date: new Date().getDate(),
    month: new Date().getMonth() + 1
  });
  return (
    <S.DayBox
      key={key}
      dayData={dayData}
      today={today}
      onClick={() =>
        setModalData(
          addZeroFunc(dayData.year, dayData.month, dayData.date),
          readImageDate
        )
      }
      backgroundImage={readImageDate ? readImageDate : null}
    >
      <S.Day>{dayData.date}</S.Day>
    </S.DayBox>
  );
};
export default DayBox;
