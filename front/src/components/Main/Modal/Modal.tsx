import React from "react";
import * as S from "./style";
const Modal = () => {
  return (
    <S.Body>
      <S.DateBox>
        <S.Date>2021.04.05</S.Date>
      </S.DateBox>
      <S.ToDoBox>
        <S.ToDoContainer>
          <S.ToDo>커밋하기!!!</S.ToDo>
        </S.ToDoContainer>
        <S.ToDoContainer>

          <S.ToDo>깃허브 레포 정리하기!!!</S.ToDo>
        </S.ToDoContainer>
        <S.ToDoContainer>

          <S.ToDo>맛있게 밥먹기!!!</S.ToDo>
        </S.ToDoContainer>
        <S.ToDoContainer></S.ToDoContainer>
        <S.ToDoContainer></S.ToDoContainer>
        <S.ToDoContainer></S.ToDoContainer>
      </S.ToDoBox>
      <S.ImgBox>
        <S.ImgText htmlFor="imgFile">이미지 추가</S.ImgText>

        <form>
          <S.Imginput id="imgFile" type="file"></S.Imginput>
        </form>
      </S.ImgBox>
    </S.Body>
  );
};
export default Modal;
