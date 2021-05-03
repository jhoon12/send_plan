import { combineReducers } from "redux";
import CalendarState from "./Calendar";
import ModalState from "./Modal";
import SignUpState from "./SignUp";
const rootReducer = combineReducers({
  CalendarState,
  ModalState,
  SignUpState
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
