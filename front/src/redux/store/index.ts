import { createStore, applyMiddleware, StoreCreator } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducer";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run( rootSaga);
export type ReducerType = ReturnType<typeof rootReducer>;
export default store;
