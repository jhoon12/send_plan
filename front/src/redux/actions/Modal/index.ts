export const SET_MODAL = 'Modal/SET_MODAL' as const;

export const setModal = ()=>{
    return {type : SET_MODAL}
};

type ModalActionType = |ReturnType<typeof setModal>

export default ModalActionType