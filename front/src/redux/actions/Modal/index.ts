export const SET_MODAL = 'Modal/SET_MODAL' as const;

export const setModal = ()=>({
    type: SET_MODAL
})

type ModalActionType = |ReturnType<typeof setModal>

export default ModalActionType