import React from "react";
import * as S from "./style";
import Calendar from "./Calendar/Calendar";
import Modal from "./Modal/Modal";
import { ReducerType } from "../../redux/store";
import { useSelector } from "react-redux";
interface Props {
  nextMonth: () => void;
  prevMonth: () => void;
  dispatchModal: (date : string) => void;
  date: {
    month: number;
    year: number;
  };
  goToLogin: () => void;
}

const Main: React.FC<Props> = ({
  nextMonth,
  prevMonth,
  date,
  dispatchModal,
  goToLogin
}) => {
  const { setModal } = useSelector((store: ReducerType) => store.ModalState);
  return (
    <S.Body>
      {setModal && (
        <>
          <S.ModalBody onClick={() => dispatchModal('10001010')}></S.ModalBody>
          <S.ModalBox>
            <Modal></Modal>
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
        <Calendar dispatchModal={dispatchModal} />
      </S.MainBody>
    </S.Body>
  );
};
export default Main;
