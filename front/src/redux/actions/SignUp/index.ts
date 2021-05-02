export const SET_EMAIL = "SignUp/SET_EMAIL" as const;
export const SET_ID = "SignUp/SET_ID" as const;
export const SET_PW = "SignUp/SET_PW" as const;
export const SET_PWCHECK = "SignUp/SET_PWCHECK" as const;

export const setEmail = (payload: string) => ({
  tpye: SET_EMAIL,
  payload
});
export const setId = (payload: string) => ({
  tpye: SET_ID,
  payload
});

export const setPw = (payload: string) => ({
  tpye: SET_PW,
  payload
});
export const setPwCheck = (payload: string) => ({
  tpye: SET_PWCHECK,
  payload
});

type SignUpAction =
  | ReturnType<typeof setEmail>
  | ReturnType<typeof setId>
  | ReturnType<typeof setPw>
  | ReturnType<typeof setPwCheck>;
export default SignUpAction;
