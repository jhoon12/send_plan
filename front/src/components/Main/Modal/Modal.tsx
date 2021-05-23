import React, { useState, useEffect, ChangeEvent, useCallback } from "react";
import { useSelector } from "react-redux";
import { SetToDoDataInterface } from "../../../redux/actions/ToDoData";
import { spliceDateString } from "../../../lib/utils";
import { ReducerType } from "../../../redux/store";
import ModalInput from "./ModalInput";
import * as S from "./style";
import { addToDoImg } from "../../../lib/api/ToDo";

interface Props {
  addToDoClient: (todo: SetToDoDataInterface[]) => void;
  addToDoData: (todo: string, date: string) => void;
  sendImgToSever: (e: ChangeEvent<HTMLInputElement>, date: string) => void;
}

const Modal: React.FC<Props> = ({
  addToDoData,
  addToDoClient,
  sendImgToSever
}) => {
  const { date } = useSelector((store: ReducerType) => store.ModalState);
  const { todo } = useSelector((store: ReducerType) => store.ToDoDataState);
  const [modalDate, setModalDate] = useState<string>("");
  const [img, setImg] = useState<string>("");
  useEffect(() => {
    setModalDate(spliceDateString(date));
  }, []);
  const changeImgClient = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setImg(URL.createObjectURL(e.target.files[0]));
    },
    [img]
  );
  return (
    <S.Body>
      <S.DateBox>
        <S.Date>{modalDate}</S.Date>
      </S.DateBox>
      <S.ToDoBox>
        {todo &&
          todo.map((ele, index) => (
            <ModalInput
              index={index}
              addToDoData={addToDoData}
              todo={ele.ToDo}
              date={date}
            />
          ))}
        <S.ToDoContainer>
          <S.PlusBox onClick={() => addToDoClient(todo)}>+</S.PlusBox>
        </S.ToDoContainer>
      </S.ToDoBox>
      <S.ImgBox>
        <S.ImgText htmlFor="imgFile" img={img}>
          {img === "" ? "이미지 추가" : ""}
        </S.ImgText>
        <form>
          <S.Imginput
            id="imgFile"
            type="file"
            onChange={e => {
              changeImgClient(e), sendImgToSever(e, date);
            }}
          ></S.Imginput>
        </form>
      </S.ImgBox>
    </S.Body>
  );
};
export default Modal;
