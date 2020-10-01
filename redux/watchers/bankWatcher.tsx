import { all, put, takeLatest } from 'redux-saga/effects';
import { BankSearchModel, companyBankInfoDataResourceProps, CompanyBankProps, CreateCompanyBankProps } from '../../@types/company/companyBank';
import httpClient from '../../services/httpService';
import { changeCompany } from '../systemsManagement/company/actions';
import { actionTypes, setAccountingCode, setBankInfo, setBankType, setCompanyBankInfo } from '../systemsManagement/companyBank/actions';

function* createCompanyBank(action: { type: string, createCompanyBankModal: CreateCompanyBankProps }) {

  const createCompanyBankModal = action.createCompanyBankModal;
  try {
    const result = yield httpClient.post('/SystemsManagement/CompanyBank', createCompanyBankModal);
    console.log(result);

  } catch (e) {

  } finally {
  }
}


function* changeCompanyBank(action: { type: string, changeCompanyBankModal: CompanyBankProps }) {

  const changeCompanyBankModal = action.changeCompanyBankModal;
  try {
    const result = yield httpClient.put(`/SystemsManagement/CompanyBank`, changeCompanyBankModal);

  } catch (e) {

  } finally {
  }
}

function* getBankType(action: { type: string }) {
  try {
    const result = yield httpClient.get('/SystemsManagement/CompanyBankType');
    yield put(setBankType(result.data))

  } catch (e) {

  } finally {
  }
}
function* getAccountingCode(action: { type: string }) {
  try {
    const result = yield httpClient.get('/Accounting/AccountingCode');
    yield put(setAccountingCode(result.data))
  } catch (error) {

  }
}

function* getCompanyBankInfo(action: { type: string, searchModel: BankSearchModel }) {
  const { searchModel } = action;
  try {
    const result: companyBankInfoDataResourceProps = yield httpClient.get('/SystemsManagement/CompanyBank', { params: searchModel });
    yield put(setCompanyBankInfo(result))

  } catch (e) {

  } finally {
  }
}
function* getBankInfo(action: { type: string, bankId: number }) {
  const bankId = action.bankId
  try {
    const result = yield httpClient.get(`/SystemsManagement/CompanyBank/${bankId}`);
    yield put(setBankInfo(result))

  } catch (e) {

  } finally {
  }
}
function* deleteCompanyBank(action: { type: string, bankId: number }) {
  const { bankId } = action;

  try {
    const result = yield httpClient.delete(`/SystemsManagement/CompanyBank/${bankId}`);
    yield put(setCompanyBankInfo(result))
  } catch (e) {

  } finally {
  }
}

export default function* companyBankWatcher() {
  yield all([
    takeLatest(actionTypes.CREAT_COMPANY_BANK, createCompanyBank),
    takeLatest(actionTypes.CHANGE_COMPANY_BANK, changeCompanyBank),
    takeLatest(actionTypes.GET_COMPANY_BANK_INFO, getCompanyBankInfo),
    takeLatest(actionTypes.GET_BANK_INFO, getBankInfo),
    takeLatest(actionTypes.GET_BANK_TYPE, getBankType),
    takeLatest(actionTypes.GET_ACCOUNTING_CODE, getAccountingCode),
    takeLatest(actionTypes.DELETE_COMPANY_BANK, deleteCompanyBank)
  ])
}