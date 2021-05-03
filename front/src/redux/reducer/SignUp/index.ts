import SignUpAction, { SET_EMAIL } from "../../actions/SignUp";

export interface InitialInterface {
  email: string;
}
export const initialState = {
  email: ""
};

const SignUpState = (
  state: InitialInterface = initialState,
  action: SignUpAction
) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload
      };
    default:
      return state;
  }
};
export default SignUpState;
