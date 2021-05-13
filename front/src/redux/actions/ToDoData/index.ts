export const SET_TODO_DATA = "ToDoData/SET_TODODATA";
export const SET_TODO_DATA_SAGA = "ToDoData/SET_TODO_DATA_SAGA";
export const ADD_TODO = "ToDoData/ADD_TODO_DATA";

export const setToDoData = (payload: string) => ({
  type: SET_TODO_DATA,
  payload
});
export const setToDoDataSaga = (payload: string) => ({
  type: SET_TODO_DATA_SAGA,
  payload
});
export const addToDo = payload => ({
  type: ADD_TODO,
  payload
});
type ToDoActionType =
  | ReturnType<typeof setToDoData>
  | ReturnType<typeof setToDoDataSaga>
  | ReturnType<typeof addToDo>;
export default ToDoActionType;
