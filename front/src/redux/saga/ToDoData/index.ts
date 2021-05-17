import { put, takeEvery, call } from "@redux-saga/core/effects";
import { refreshTokenApi } from "../../../lib/api/Login";
import { readToDo } from "../../../lib/api/ToDo";
import {
  setToDoData,
  setToDoDataSaga,
  SET_TODO_DATA_SAGA
} from "../../actions/ToDoData";

function* setToDoDataSuccess(action: ReturnType<typeof setToDoDataSaga>) {
  try {
    console.log(" 사가호출");
    const res = yield call(readToDo, action.payload);
    // const res = yield readToDo(action.payload);
    yield put(setToDoData(res.data));
    console.log(res);
  } catch (err) {
    console.log(err);
    if (err.response.status === 401) {
      // yield call(refreshTokenApi);
      // setToDoDataSuccess(action);
    }
  }
}

export default function* todoDataSaga() {
  yield takeEvery(SET_TODO_DATA_SAGA, setToDoDataSuccess);
}
