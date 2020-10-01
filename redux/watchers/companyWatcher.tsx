import { all, takeLatest, put, takeEvery } from 'redux-saga/effects'
import { actionTypes, setCompany, setCompanyList } from '../systemsManagement/company/actions'
import httpClient from '../../services/httpService';
import { CompanyProps } from '../../@types/company/createCompany';
import { PagedListModel } from '../../@types/appTypes/baseModel';
import { CompanySearchModel } from '../../@types/company/companyModels';

function* createCompany(action: { type: string, createCompanyModal: CompanyProps }) {

  const createCompanyModal = action.createCompanyModal;
  try {
    const result = yield httpClient.post('/SystemsManagement/Company', createCompanyModal);

  } catch (e) {

  } finally {
  }
}

function* changeCompany(action: { type: string, changeCompanyModal: CompanyProps }) {

  const changeCompanyModal = action.changeCompanyModal;
  try {
    const result = yield httpClient.put(`/SystemsManagement/Company`, changeCompanyModal);

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


function* getCompanyList(action: { type: string, searchModel: CompanySearchModel }) {
  const { searchModel } = action;
  try {
    const result: PagedListModel<CompanyProps> = yield httpClient.get('SystemsManagement/Company', { params: searchModel });
    yield put(setCompanyList(result));

  } catch (e) {

  } finally {
  }
}

function* getCompany(action: { type: string, companyId: number }) {
  const companyId = action.companyId
  try {
    const result: CompanyProps = yield httpClient.get(`SystemsManagement/Company/${companyId}`);
    yield put(setCompany(result))

  } catch (e) {

  } finally {
  }
}

function* deleteCompany(action: { type: string, companyId: Array<number | string> }) {
  const companyId = action.companyId;
  console.log(companyId);
  try {
    const result = yield httpClient.delete(`SystemsManagement/Company/Multiple`, {
      data: companyId
    })
    yield put(setCompanyList(result))

  } catch (error) {

  }
}


export default function* companyWatcher() {
  yield all([
    takeLatest(actionTypes.CREAT_COMPANY, createCompany),
    takeLatest(actionTypes.CHANGE_COMPANY, changeCompany),
    takeLatest(actionTypes.UPLOAD_LOGO, uploadLogo),
    takeLatest(actionTypes.GET_COMPANY_LIST, getCompanyList),
    takeLatest(actionTypes.GET_COMPANY, getCompany),
    takeLatest(actionTypes.DELETE_COMPANY, deleteCompany)
  ])
}