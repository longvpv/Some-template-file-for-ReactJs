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

function* uploadLogo(action: { type: string, file }) {
  const file = action.file;
  try {
    const result = yield httpClient.post('/api/Upload', file);

  } catch (e) {

  } finally {
  }
}


function* getCompanyList(action: { type: string }) {
  try {
    const result = yield httpClient.get('SystemsManagement/Company');
    yield put(setCompanyList(result))

  } catch (e) {

  } finally {
  }
}

function* getCompany(action: { type: string, companyId }) {
  const companyId = action.companyId
  try {
    const result: CompanyProps = yield httpClient.get(`SystemsManagement/Company/${companyId}`);
    console.log(result);
    yield put(setCompany(result))

  } catch (e) {

  } finally {
  }
}

function* deleteCompany(action: { type: string, companyId }) {
  const companyId = action.companyId
  console.log(companyId);
  try {
    const result = yield httpClient.delete(`SystemsManagement/Company/${companyId}`)
    yield put(setCompanyList(result))

  } catch (error) {

  }
}


export default function* companyWatcher() {
  yield all([
    takeLatest(actionTypes.CREAT_COMPANY, createCompany),
    takeLatest(actionTypes.UPLOAD_LOGO, uploadLogo),
    takeLatest(actionTypes.GET_COMPANY_LIST, getCompanyList),
    takeLatest(actionTypes.GET_COMPANY, getCompany),
    takeLatest(actionTypes.DELETE_COMPANY, deleteCompany)
  ])
}