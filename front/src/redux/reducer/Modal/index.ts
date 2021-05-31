import ModalActionType, {
  SET_MODAL,
  SET_MODAL_DATE,
  SET_MODAL_IMG
} from "../../actions/Modal";

export interface InitialInterface {
  setModal: boolean;
  date: string;
  img: string;
}
const initialState: InitialInterface = {
  setModal: false,
  date: "",
  img: ""
};

const ModalState = (
  state: InitialInterface = initialState,
  action: ModalActionType
) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        setModal: !state.setModal
      };
    case SET_MODAL_DATE:
      return {
        ...state,
        date: action.payload
      };
    case SET_MODAL_IMG:
      return {
        ...state,
        img: action.payload
      };
    default:
      return state;
  }
};
export default ModalState;
