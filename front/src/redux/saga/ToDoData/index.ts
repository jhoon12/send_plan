import { put, takeEvery } from "@redux-saga/core/effects";
import { readToDo } from "../../../lib/api/ToDo";
import { setToDoData, setToDoDataSaga } from "../../actions/ToDoData";

function* setToDoDataSuccess(action: ReturnType<typeof setToDoDataSaga>) {
  console.log(action);
  console.log(typeof action);
  try {
    const res = yield readToDo(action.payload);
    yield put(setToDoData(res.data));
  } catch (err) {
    console.log(err);
  }
}

export default function* todoDataSaga() {
  yield takeEvery(setToDoDataSaga, setToDoDataSuccess);
}
