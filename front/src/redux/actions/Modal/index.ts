export const SET_MODAL = "Modal/SET_MODAL" as const;
export const SET_MODAL_DATE = "Modal/SET_MODAL_DATE" as const;
export const SET_MODAL_IMG = "Modal/SET_MODAL_IMG" as const;
export const setModal = () => ({
  type: SET_MODAL
});
export const setModalDate = (payload: string) => ({
  type: SET_MODAL_DATE,
  payload
});
export const setModalImg = (payload: string) => ({
  type: SET_MODAL_IMG,
  payload
});
type ModalActionType =
  | ReturnType<typeof setModal>
  | ReturnType<typeof setModalDate>
  | ReturnType<typeof setModalImg>

export default ModalActionType;
