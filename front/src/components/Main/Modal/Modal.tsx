import React, { useState, useEffect, ChangeEvent, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SetToDoDataInterface } from "../../../redux/actions/ToDoData";
import { getImgSrc, spliceDateString } from "../../../lib/utils";
import { setModalImg } from "../../../redux/actions/Modal/index";
import { ReducerType } from "../../../redux/store";
import ModalInput from "./ModalInput";
import * as S from "./style";

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
  const dispatch = useDispatch();
  const { date, img }: { date: string; img: string } = useSelector(
    (store: ReducerType) => store.ModalState
  );
  const { todo }: { todo: SetToDoDataInterface[] } = useSelector(
    (store: ReducerType) => store.ToDoDataState
  );
  const [modalDate, setModalDate] = useState<string>("");
  const [clientImg, setClientImg] = useState<string>("");
  useEffect(() => {
    if (img) setClientImg(getImgSrc(img));
    setModalDate(spliceDateString(date));
    return () => {
      dispatch(setModalImg(""));
    };
  }, []);
  const changeImgClient = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setClientImg(URL.createObjectURL(e.target.files[0]));
    },
    [clientImg]
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
        <S.ImgText htmlFor="imgFile" img={clientImg}>
          {clientImg === "" ? "이미지 추가" : ""}
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
