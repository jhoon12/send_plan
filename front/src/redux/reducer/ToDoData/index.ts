import { ReadToDoImage } from "../../../lib/payloads/ToDo";
import ToDoActionType, {
  READ_TODO_IMG,
  SetToDoDataInterface,
  SET_TODO_DATA
} from "../../actions/ToDoData";

export interface InitialInterface {
  todo: SetToDoDataInterface[];
  date: string;
  imageDateArr: ReadToDoImage[];
}
export const initialState: InitialInterface = {
  todo: [],
  date: "",
  imageDateArr: []
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
    case READ_TODO_IMG:
      return {
        ...state,
        imageDateArr: action.payload
      };
    default:
      return state;
  }
};
export default ToDoDataState;
