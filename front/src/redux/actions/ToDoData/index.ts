export const SET_TODO_DATA = "ToDoData/SET_TODODATA";
export const SET_TODO_DATA_SAGA = "ToDoData/SET_TODO_DATA_SAGA";
export const ADD_TODO = "ToDoData/ADD_TODO_DATA";
export const ADD_TODO_SAGA = "ToDoData/ADD_TODO_DATA_SAGA";
// export const ADD_IMG = "ToDoData/ADD_IMG";
// export const ADD_IMG_SAGA = "ToDoData/ADD_IMG_SAGA";
interface AddToDoInterface {
  date: string;
  todo: string;
}
export interface SetToDoDataInterface {
  ToDo: string;
  date: string;
  email: string;
  img: null | string;
  todoID: number;
}
// interface SetImgFileInterface {
//   lastModified: string;
//   lastModifiedDate: object;
//   name: string;
//   size: number;
//   type: string;
//   webkitRelativePath: string;
// }
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
// export const addImgSaga = (payload: SetImgFileInterface) => ({
//   type: ADD_IMG_SAGA,
//   payload
// });
// export const addImg = (payload: string) => ({
//   type: ADD_IMG,
//   payload
// });
type ToDoActionType =
  | ReturnType<typeof setToDoData>
  // | ReturnType<typeof addImg>;
export default ToDoActionType;
