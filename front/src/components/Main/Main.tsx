import React, { ChangeEvent } from "react";
import * as S from "./style";
import Calendar from "./Calendar/Calendar";
import Modal from "./Modal/Modal";
import { ReducerType } from "../../redux/store";
import { useSelector } from "react-redux";
import { SetToDoDataInterface } from "../../redux/actions/ToDoData";
interface Props {
  nextMonth: () => void;
  prevMonth: () => void;
  dispatchModal: () => void;
  date: {
    month: number;
    year: number;
  };
  goToLogin: () => void;
  setModalData: (date: string, img: string | void) => void;
  addToDoData: (todo: string, date: string) => void;
  addToDoClient: (todo: SetToDoDataInterface[]) => void;
  sendImgToSever: (e: ChangeEvent<HTMLInputElement>, date: string) => void;
}

const Main: React.FC<Props> = ({
  nextMonth,
  prevMonth,
  date,
  dispatchModal,
  goToLogin,
  setModalData,
  addToDoData,
  addToDoClient,
  sendImgToSever
}) => {
  const { setModal } = useSelector((store: ReducerType) => store.ModalState);
  return (
    <S.Body>
      {setModal && (
        <>
          <S.ModalBody onClick={() => dispatchModal()}></S.ModalBody>
          <S.ModalBox>
            <Modal
              addToDoData={addToDoData}
              addToDoClient={addToDoClient}
              sendImgToSever={sendImgToSever}
            ></Modal>
          </S.ModalBox>
        </>
      )}
      <S.Header>
        <S.LogoTitle onClick={goToLogin}>Send Plan</S.LogoTitle>
        <S.MonthBox>
          <S.LeftDArrow onClick={prevMonth} />
          <S.Month>
            {date.year}.{date.month < 10 ? `0${date.month}` : `${date.month}`}{" "}
          </S.Month>
          <S.RightDArrow onClick={nextMonth} />
        </S.MonthBox>
      </S.Header>
      <S.MainBody>
        <Calendar setModalData={setModalData} />
      </S.MainBody>
    </S.Body>
  );
};
export default Main;
