import { put, takeEvery, call } from "@redux-saga/core/effects";
import { addToDo, readMonthImg, readToDo } from "../../../lib/api/ToDo";
import { ReadToDoImage, ReadToDoRes } from "../../../lib/payloads/ToDo";
import {
  addToDoSaga,
  ADD_TODO_SAGA,
  readToDoImage,
  readToDoImageSaga,
  READ_TODO_IMG_SAGA,
  setToDoData,
  setToDoDataSaga,
  SET_TODO_DATA_SAGA
} from "../../actions/ToDoData";
import { AxiosResponse } from "axios";
function* setToDoDataSuccess(action: ReturnType<typeof setToDoDataSaga>) {
  try {
    const res: AxiosResponse<ReadToDoRes> = yield call(
      readToDo,
      action.payload
    );
    if (res.data[0] === undefined) yield put(setToDoData([]));
    else yield put(setToDoData(res.data[0]));
  } catch (err) {}
}
function* addToDoSuccess(action: ReturnType<typeof addToDoSaga>) {
  try {
    yield call(addToDo, action.payload.todo, action.payload.date);
    alert("등록되었습니다.");
  } catch (err) {}
}
function* readToDoImageSuccess(action: ReturnType<typeof readToDoImageSaga>) {
  try {
    const res: AxiosResponse<ReadToDoImage[]> = yield call(
      readMonthImg,
      action.payload.start,
      action.payload.end
    );
    yield put(readToDoImage(res.data));
  } catch (err) {}
}
export default function* todoDataSaga() {
  yield takeEvery(SET_TODO_DATA_SAGA, setToDoDataSuccess);
  yield takeEvery(ADD_TODO_SAGA, addToDoSuccess);
  yield takeEvery(READ_TODO_IMG_SAGA, readToDoImageSuccess);
}
