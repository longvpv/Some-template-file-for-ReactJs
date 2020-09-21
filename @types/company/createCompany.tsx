export default interface createCompanyModal {
  companyName: string,
  companyAddress: string,
  companyPhone: string,
  addressToPrintReport: string,
  orderDocPrefix: string,
  companySupportEmail: string,
  nameToPrintReport: string,
  companyEnglishName: string,
  companyRegistration: string,
  companyTitle: string,
  companyFax: string,
  companyHotline: string,
  companySaleEmail: string,
  website: string,
  visiblePOSMobileApp: boolean,
  companyLogo: string,
  posCustomerBill: number,
  posSavedBill: number,
  posWarehouseBill: number,
  posDefaultPrinter: number,
  stampDefaultPrinter: number,
  numberGroupSeparator: number,
  active: boolean,
  parentId: number,
  id: number

};

export interface SystemsCompanyState {
  createCompanyModal: Object
}
