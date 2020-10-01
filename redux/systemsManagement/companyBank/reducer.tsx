import { CompanyBankState } from '../../../@types/company/companyBank';
import { SystemsCompanyState } from '../../../@types/company/createCompany';
// import DynamicState from "../../@types/dynamic/dynamicState";

import { actionTypes } from './actions'

const initializeState: CompanyBankState = {
  companyBankInfoDataResource: {
    data: [],
    hasNextPage: false,
    page: 0,
    pageSize: 10,
    recordsFiltered: 0,
    recordsTotal: 0,
    total: 0,
    totalPages: 0
  },
  bankInfo: {
    id: null,
    bankCode: '',
    bankName: '',
    bankAddress: '',
    bankAccountName: '',
    bankAccountNumber: '',
    accountingCodeId: null,
    paypalAccount: '',
    paypalNumber: '',
    cifCode: '',
    iebCode: '',
    companyId: null
  },
  bankType: [],
  accountingCode: [],

}

export default function reducer(state = initializeState, action: any) {
  switch (action.type) {

    case actionTypes.SET_COMPANY_BANK_INFO:
      return {
        ...state,
        companyBankInfoDataResource: action.companyBankInfoDataResource
      };

    case actionTypes.SET_BANK_INFO:
      return {
        ...state,
        bankInfo: action.bankInfo
      }
    case actionTypes.SET_BANK_TYPE:
      return {
        ...state,
        bankType: action.bankType
      };
    case actionTypes.SET_ACCOUNTING_CODE:
      return {
        ...state,
        accountingCode: action.accountingCode
      }

    default:
      return state;
  }
}