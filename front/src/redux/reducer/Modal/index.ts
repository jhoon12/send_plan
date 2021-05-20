import ModalActionType, {
  SET_MODAL,
  SET_MODAL_DATE
} from "../../actions/Modal";

export interface InitialInterface {
  setModal: boolean;
  date: string;
}
const initialState = {
  setModal: false,
  date: ""
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
    default:
      return state;
  }
};
export default ModalState;
