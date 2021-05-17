import ToDoActionType, { SET_TODO_DATA } from "../../actions/ToDoData";

export interface InitialInterface {
  todo: string;
  date: string;
}
export const initialState: InitialInterface[] = [
  //   { todo: "asdsad", date: "asdds" }
];

const ToDoDataState = (
  state: InitialInterface[] = initialState,
  action: ToDoActionType
) => {
  switch (action.type) {
    case SET_TODO_DATA:
      return {
        ...state,
        // todo: action.payload
      };
    default:
      return state;
  }
};
export default ToDoDataState;
