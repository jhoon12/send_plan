import { all } from 'redux-saga/effects';
import todoDataSaga from './ToDoData';

export default function* rootSaga(){
    yield all([todoDataSaga()])
}
