import styled from "styled-components";

export const Body = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;
export const DateBox = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  justify-content: center;
  width: 100%;
`;

export const Date = styled.div`
  font-size: 20px;
`;
export const ToDoBox = styled.div`
  width: 95%;
  height: 60%;
  overflow: scroll;
  overflow-x: hidden;
  margin: 0 auto;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f3f3f3;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }
`;
export const ToDoContainer = styled.div`
  background-color: #f8f9fa;
  width: 100%;
  height: 30%;
  margin-bottom: 5px;
  align-items: center;
  display: flex;
`;

export const ToDo = styled.div`
  padding-left: 30px;
  width: 100%;
  height: 20px;
  font-weight: bold;
`;

export const ImgBox = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 95%;
  height: 22%;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgText = styled.label`
  color: black;
  font-size: 12px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const Imginput = styled.input`
  width: 0px;
  outline: none;
`;
export const PlusBox = styled.div`
  font-size: 60px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
`;
