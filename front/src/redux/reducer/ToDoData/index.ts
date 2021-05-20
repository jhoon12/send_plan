import ToDoActionType, {
  SetToDoDataInterface,
  SET_TODO_DATA,
} from "../../actions/ToDoData";

export interface InitialInterface {
  todo: SetToDoDataInterface[];
  date: string;
}
export const initialState: InitialInterface = {
  todo: [],
  date: ""
};

const ToDoDataState = (
  state: InitialInterface = initialState,
  action: ToDoActionType
) => {
  switch (action.type) {
    case SET_TODO_DATA:
      return {
        ...state,
        todo: action.payload
      };
    default:
      return state;
  }
};
export default ToDoDataState;
