import styled from "styled-components";
import { Date, Today } from "../../../type/Calendar";

export const Header = styled.div`
  width: 100%;
  height: 5%;
  flex: 7;
  display: flex;
`;
export const DayOfWeek = styled.div`
  flex: 1;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
export const Body = styled.div`
  width: 100%;
`;
export const Week = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  flex: 7;
`;
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
  /* color:${(props: any) => "red"} */
`;
export const Day = styled.div`
  margin: 0 auto;
`;
