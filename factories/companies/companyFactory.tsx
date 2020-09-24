import { CompanyBankProps } from "../../@types/company/companyBank";
import { CompanyProps } from "../../@types/company/createCompany";

export const prepareEmptyCompanyModel = () => {
  const company: CompanyProps = {
    companyName: '',
    companyAddress: '',
    companyPhone: '',
    addressToPrintReport: '',
    orderDocPrefix: '',
    companySupportEmail: '',
    nameToPrintReport: '',
    companyEnglishName: '',
    companyRegistration: '',
    companyTitle: '',
    companyFax: '',
    companyHotline: '',
    companySaleEmail: '',
    website: '',
    visiblePOSMobileApp: false,
    companyLogo: '',
    posCustomerBill: 0,
    posSavedBill: 0,
    posWarehouseBill: 0,
    posDefaultPrinter: 0,
    stampDefaultPrinter: 0,
    numberGroupSeparator: 0,
    active: true,
    parentId: 0,
    id: 0,
    countryId: null,
    districtId: null,
    provinceId: null,
    wardId: null,
    companyCode: ''
  }

  return company;
}

export const prepareEmptyCompanyBankModel = () => {
  const company: CompanyBankProps = {
    // id: null,
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
  }

  return company;
}