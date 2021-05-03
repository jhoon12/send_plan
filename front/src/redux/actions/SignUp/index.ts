export const SET_EMAIL = "SignUp/SET_EMAIL" as const;
export const setEmail = (payload: string) => ({
  type: SET_EMAIL,
  payload
});

type SignUpAction =
  | ReturnType<typeof setEmail>

export default SignUpAction;
