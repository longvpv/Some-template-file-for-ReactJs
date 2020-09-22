import { SystemsCompanyState } from '../../../@types/company/createCompany';
// import DynamicState from "../../@types/dynamic/dynamicState";

import { actionTypes } from './actions'

const initializeState: SystemsCompanyState = {
  createCompanyModal: {},
  companyData: {
    data: [],
    recordsFiltered: 0,
    recordsTotal: 0,
    total: 0,
    totalPages: 0,
    pageSize: 0,
    page: 0,
    hasNextPage: false
  },
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
    parentId: 0

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


    default:
      return state;
  }
}