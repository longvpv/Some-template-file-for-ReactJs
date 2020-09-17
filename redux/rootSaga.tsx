import { all, fork } from "redux-saga/effects";
import es6promise from "es6-promise";
import loginWatcher from "./watchers/loginWatcher";
import companyWatcher from "./watchers/companyWatcher";


es6promise.polyfill();

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(companyWatcher),
  ]);
}
