
import { all, takeLatest, put, takeEvery } from 'redux-saga/effects'
import { actionTypes, setCompany, setCompanyList } from '../systemsManagement/company/actions'
import httpClient from '../../services/httpService';
import { CompanyProps } from '../../@types/company/createCompany';

function* createCompany(action: { type: string, createCompanyModal: CompanyProps }) {

  const createCompanyModal = action.createCompanyModal;
  try {
    const result = yield httpClient.post('/SystemsManagement/Company', createCompanyModal);

  } catch (e) {

  } finally {
  }
}




export default function* staffWatcher() {
  yield all([
    // takeLatest(actionTypes.CREAT_COMPANY, createCompany),
    // takeLatest(actionTypes.UPLOAD_LOGO, uploadLogo),
    // takeLatest(actionTypes.GET_COMPANY_LIST, getCompanyList),
    // takeLatest(actionTypes.GET_COMPANY, getCompany),
    // takeLatest(actionTypes.DELETE_COMPANY, deleteCompany)
  ])
}