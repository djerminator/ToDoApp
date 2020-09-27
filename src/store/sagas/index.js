import { all, fork } from "redux-saga/effects";
import { watchAddSaga } from "./toDo.saga";

export function* rootReducersSaga() {
  yield all([fork(watchAddSaga)]);
}
