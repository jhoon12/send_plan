import { put, takeEvery, call } from "@redux-saga/core/effects";
import { addToDo, readMonthImg, readToDo } from "../../../lib/api/ToDo";
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

function* setToDoDataSuccess(action: ReturnType<typeof setToDoDataSaga>) {
  try {
    const res = yield call(readToDo, action.payload);
    yield put(setToDoData(res.data[0]));
  } catch (err) {
    console.log(err);
  }
}
function* addToDoSuccess(action: ReturnType<typeof addToDoSaga>) {
  try {
    yield call(addToDo, action.payload.todo, action.payload.date);
    alert("등록되었습니다.");
  } catch (err) {
    console.log(err);
  }
}
function* readToDoImageSuccess(action: ReturnType<typeof readToDoImageSaga>) {
  try {
    const res = yield call(
      readMonthImg,
      action.payload.start,
      action.payload.end
    );
    yield put( readToDoImage(res.data));
  } catch (err) {
    console.log(err);
  }
}
export default function* todoDataSaga() {
  yield takeEvery(SET_TODO_DATA_SAGA, setToDoDataSuccess);
  yield takeEvery(ADD_TODO_SAGA, addToDoSuccess);
  yield takeEvery(READ_TODO_IMG_SAGA, readToDoImageSuccess);
}
