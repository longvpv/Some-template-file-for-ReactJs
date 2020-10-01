

// function* createCompany(action: { type: string, createCompanyModal: CompanyProps }) {

import { all, put, takeLatest } from "redux-saga/effects";
import { CreateStaffModal } from "../../@types/staff/staffState";
import httpClient from "../../services/httpService";
import { actionTypes, setAllStaff } from "../systemsManagement/staff/actions";

//   const createCompanyModal = action.createCompanyModal;
//   try {
//     const result = yield httpClient.post('/SystemsManagement/Company', createCompanyModal);

//   } catch (e) {

//   } finally {
//   }
// }

function* createStaff(action: { type: string, createStaffModal: CreateStaffModal }) {
  const { createStaffModal } = action;
  try {
    yield httpClient.post('/SystemsManagement/Staff', createStaffModal);
    console.log('Create Done');
  } catch (e) {

  }
}

function* getAllStaff(action: { type: string }) {
  try {
    const result = yield httpClient.get('/SystemsManagement/Staff');
    yield put(setAllStaff(result))
  } catch (e) {

  } finally {
  }
}


export default function* staffWatcher() {
  yield all([
    takeLatest(actionTypes.GET_ALL_STAFF, getAllStaff),
    takeLatest(actionTypes.CREATE_STAFF, createStaff),
    // takeLatest(actionTypes.GET_COMPANY_LIST, getCompanyList),
    // takeLatest(actionTypes.GET_COMPANY, getCompany),
    // takeLatest(actionTypes.DELETE_COMPANY, deleteCompany)
  ])
}