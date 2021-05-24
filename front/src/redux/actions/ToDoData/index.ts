import { ReadToDoImage } from "../../../lib/payloads/ToDo";
export const SET_TODO_DATA = "ToDoData/SET_TODODATA" as const;
export const SET_TODO_DATA_SAGA = "ToDoData/SET_TODO_DATA_SAGA" as const;
export const ADD_TODO = "ToDoData/ADD_TODO_DATA" as const;
export const ADD_TODO_SAGA = "ToDoData/ADD_TODO_DATA_SAGA" as const;
export const READ_TODO_IMG = "ToDoData/READ_TODO_IMG" as const;
export const READ_TODO_IMG_SAGA = "ToDoData/READ_TODO_IMG_SAGA" as const;
interface AddToDoInterface {
  date: string;
  todo: string;
}
interface ReadToDoImageInterface {
  start: string;
  end: string;
}
export interface SetToDoDataInterface {
  ToDo: string;
  date: string;
  email: string;
  img: null | string;
  todoID: number;
}
export const setToDoData = (payload: SetToDoDataInterface[]) => ({
  type: SET_TODO_DATA,
  payload
});
export const setToDoDataSaga = (payload: string) => ({
  type: SET_TODO_DATA_SAGA,
  payload
});
export const addToDoSaga = (payload: AddToDoInterface) => ({
  type: ADD_TODO_SAGA,
  payload
});
export const readToDoImage = (payload: ReadToDoImage[]) => ({
  type: READ_TODO_IMG,
  payload
});
export const readToDoImageSaga = (payload: ReadToDoImageInterface) => ({
  type: READ_TODO_IMG_SAGA,
  payload
});

type ToDoActionType =
  | ReturnType<typeof setToDoData>
  | ReturnType<typeof readToDoImage>;

export default ToDoActionType;
