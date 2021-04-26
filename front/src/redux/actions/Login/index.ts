export const SET_ID = "Login/SET_ID";
export const SET_PW = "Login/SET_PW";

export const setID = (id: string) => ({ type: SET_ID, id });
export const setPW = (pw: string) => ({ type: SET_PW, pw });

type LoginAction = ReturnType<typeof setID> | ReturnType<typeof setPW>;
export default LoginAction;
