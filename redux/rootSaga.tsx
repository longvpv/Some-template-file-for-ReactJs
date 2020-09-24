import { all, fork } from "redux-saga/effects";
import es6promise from "es6-promise";
import loginWatcher from "./watchers/loginWatcher";
import companyWatcher from "./watchers/companyWatcher";
import companyBankWatcher from "./watchers/bankWatcher";


es6promise.polyfill();

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(companyWatcher),
    fork(companyBankWatcher),
  ]);
}
