import { combineReducers } from "redux";
import CalendarState from "./Calendar";
import ModalState from "./Modal";
import SignUpState from "./SignUp";
import ToDoDataState from "./ToDoData";
const rootReducer = combineReducers({
  CalendarState,
  ModalState,
  SignUpState,
  ToDoDataState
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
