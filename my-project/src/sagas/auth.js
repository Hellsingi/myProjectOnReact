import * as api from "../connectivity/api";
import { call, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga";
import * as types from "../constants/actionTypes";

export function* doLogin(action) {
  const { username, password } = action.payload;

  const responseBody = yield call(api.login, username, password);

  yield put({
    type: types.LOGIN_SUCCEEDED,
    payload: {
      idToken: responseBody.token
    }
  });
}

export function* watchLogin() {
  yield takeLatest(types.LOGIN_REQUESTED, doLogin);
}

export function* doLoginSucceeded(action) {}

export function* watchLoginSucceeded() {
  yield takeLatest(types.LOGIN_SUCCEEDED, doLoginSucceeded);
}

export function* doLoginFailed(action) {}

export function* watchLoginFailed() {
  yield takeLatest(types.LOGIN_FAILED, doLoginFailed);
}
