export const SET_MODAL = "Modal/SET_MODAL" as const;

export const setModal = (payload: string) => ({
  type: SET_MODAL,
  payload
});

type ModalActionType = ReturnType<typeof setModal>;

export default ModalActionType;
