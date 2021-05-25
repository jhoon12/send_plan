import styled from "styled-components";
import { Date, Today } from "../../../../../hooks/type/Calendar";

export const DayBox = styled.div<{
  dayData: Date;
  today: Today;
  backgroundImage: string;
}>`
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
  background: url(${props =>`http://10.156.145.168:8000/uploads/${props.backgroundImage}`});
   background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

`;
export const Day = styled.div`
  margin: 0 auto;
`;
