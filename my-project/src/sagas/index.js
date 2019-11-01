import { fork } from "redux-saga/effects";
// import * as authSaga from "./auth";
import { watchLogin } from './auth';

export default function* rootSaga() {
  // yield [
    yield fork(watchLogin);
      // fork(authSaga.watchLoginSucceeded),
      // fork(authSaga.watchLoginFailed),
    // ];
}
