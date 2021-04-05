import styled from "styled-components";
import { RightArrow } from "@styled-icons/boxicons-regular/RightArrow";
import { LeftArrow } from "@styled-icons/boxicons-regular/LeftArrow";
export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const ModalBody = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(43, 40, 40, 0.5);
  position:absolute;
  z-index:4;
`;
export const ModalBox = styled.div`
  position:absolute;
  width:50vw;
  height:50vh;
	right: 30%;
	top: 11%;
  width: 40vw;
	height: 75vh;
  z-index:5;
`;
export const Header = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;
export const LogoTitle = styled.div`
  width: 20%;
  height: 100%;
  font-family: "Caveat", cursive;
  font-weight: bold;
  font-size: 50px;
  color: #8ec5fc;
  padding-left: 30px;
`;
export const MonthBox = styled.div`
  padding-top: 20px;
  margin-left: 22%;
  display: flex;
  width: 30%;
  height: 50%;
  /* align-items:center; */
`;
export const RightDArrow = styled(RightArrow)`
  width: 30px;
  height: 30px;
  margin-bottom: 3px;
  transform: translate(0px, -2px);
`;
export const LeftDArrow = styled(LeftArrow)`
  width: 30px;
  height: 30px;
  transform: translate(0px, -2px);
`;
export const Month = styled.div`
  font-size: 30px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainBody = styled.div`
  flex: 1;
`;
