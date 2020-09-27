import { put, takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
function* toDoSaga(action) {
  //The Saga acts as a middleware before reducer,you can make api calls or log before reducer gets the action
  try {
    const logTask = new Promise(function (resolve, reject) {
      //added half second lag just to give the feel of API call - showing the purpose of saga
      setTimeout(() => resolve(action.payload), 500);
    });
    const response = yield logTask;
    console.log(
      `Initiation to add  ${response.task} Task Done at ${new Date()}`
    );
    yield put({
      type: actionTypes.ADD,
      payload: response
    });
  } catch (error) {
    console.log("Error", error);
  }
}

export function* watchAddSaga() {
  yield takeEvery(actionTypes.ADD_INITIATE, toDoSaga);
}
