import styled from "styled-components";
import { Date, Today } from "../../../../../hooks/type/Calendar";
export const DayBox = styled.div<{ dayData: Date; today: Today }>`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${props => {
    if (
      props.dayData.date === props.today.date &&
      props.dayData.month === props.today.month
    )
      return "red";
    else if (props.dayData.isThisMonth) return "black";
    else return "#868e96";
  }};
`;
export const Day = styled.div`
  margin: 0 auto;
`;
