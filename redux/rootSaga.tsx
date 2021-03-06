import { all, fork } from "redux-saga/effects";
import es6promise from "es6-promise";
import loginWatcher from "./watchers/loginWatcher";
import companyWatcher from "./watchers/companyWatcher";
import departmentWatcher from "./watchers/departmentWatcher";
import companyBankWatcher from "./watchers/bankWatcher";
import staffWatcher from "./watchers/staffWatcher";


es6promise.polyfill();

export default function* rootSaga() {
  yield all([
    fork(loginWatcher),
    fork(companyWatcher),
    fork(departmentWatcher),
    fork(companyBankWatcher),
    fork(staffWatcher)
  ]);
}
