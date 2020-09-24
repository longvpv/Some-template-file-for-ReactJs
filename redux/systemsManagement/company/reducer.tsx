import { SystemsCompanyState } from '../../../@types/company/createCompany';
// import DynamicState from "../../@types/dynamic/dynamicState";

import { actionTypes } from './actions'

const initializeState: SystemsCompanyState = {
  createCompanyModal: null,
  companyData: [],
  company: {
    id: 0,
    companyName: '',
    companyAddress: '',
    companyPhone: '',
    addressToPrintReport: '',
    orderDocPrefix: '',
    companySupportEmail: '',
    nameToPrintReport: '',
    countryId: 0,
    provinceId: 0,
    districtId: 0,
    wardId: 0,
    companyEnglishName: '',
    companyRegistration: '',
    companyTitle: '',
    companyFax: '',
    companyHotline: '',
    companySaleEmail: '',
    website: '',
    visiblePOSMobileApp: true,
    companyLogo: '',
    posCustomerBill: 0,
    posSavedBill: 0,
    posWarehouseBill: 0,
    posDefaultPrinter: 0,
    stampDefaultPrinter: 0,
    numberGroupSeparator: 0,
    active: true,
    parentId: 0,
    companyCode: null

  },
  printer: []
}

export default function reducer(state = initializeState, action: any) {
  switch (action.type) {
    case actionTypes.CREAT_COMPANY:
      return {
        ...state,
        createCompanyModal: action.createCompanyModal
      }
    case actionTypes.SET_COMPANY_LIST:
      return {
        ...state,
        companyData: action.companyData
      }
    case actionTypes.SET_COMPANY:
      return {
        ...state,
        company: {
          ...action.company
        }
      }
    case actionTypes.SET_PRINTER:
      return {
        ...state,
        printer: action.printer
      }


    default:
      return state;
  }
}