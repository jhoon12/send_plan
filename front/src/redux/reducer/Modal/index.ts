import ModalActionType, { SET_MODAL } from "../../actions/Modal";

export interface InitialInterface {
  setModal: boolean;
}
const initialState = {
  setModal: false
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
    default:
      return state;
  }
};
export default ModalState