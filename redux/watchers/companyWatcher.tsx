// import { actionTypes, setUserProfile, setUserSettings, setAlert, prepareUserProfileData } from "../profile/actions";
import { all, takeLatest, put, takeEvery } from 'redux-saga/effects'
import { actionTypes } from '../systemsManagement/company/actions'
import httpClient from '../../services/httpService';

function* createCompany(action: { type: string, createCompanyModal: Object }) {

  const createCompanyModal = action.createCompanyModal;
  try {
    const result = yield httpClient.post('/SystemsManagement/Company', createCompanyModal);
    console.log({ result });

  } catch (e) {

  } finally {
  }
}


export default function* companyWatcher() {
  yield all([
    takeLatest(actionTypes.CREAT_COMPANY, createCompany),
  ])
}