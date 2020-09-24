import { CompanyBankState } from '../../../@types/company/companyBank';
import { SystemsCompanyState } from '../../../@types/company/createCompany';
// import DynamicState from "../../@types/dynamic/dynamicState";

import { actionTypes } from './actions'

const initializeState: CompanyBankState = {
  //:SystemsCompanyState 
  companyBankInfo: [],
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
  bankType: []

}

export default function reducer(state = initializeState, action: any) {
  switch (action.type) {

    case actionTypes.SET_COMPANY_BANK_INFO:
      return {
        ...state,
        companyBankInfo: action.companyBankInfo
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

    default:
      return state;
  }
}