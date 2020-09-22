export default interface createCompanyModal {
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  addressToPrintReport: string;
  orderDocPrefix: string;
  companySupportEmail: string;
  nameToPrintReport: string;
  companyEnglishName: string;
  companyRegistration: string;
  companyTitle: string;
  companyFax: string;
  companyHotline: string;
  companySaleEmail: string;
  website: string;
  visiblePOSMobileApp: boolean;
  companyLogo: string;
  posCustomerBill: number;
  posSavedBill: number;
  posWarehouseBill: number;
  posDefaultPrinter: number;
  stampDefaultPrinter: number;
  numberGroupSeparator: number;
  active: boolean;
  parentId: number;
  id: number;
  countryId?: number;
  provinceId?: number;
  districtId?: number;
  wardId?: number;

};

export interface CompanyData {
  data: Array<any>;
  recordsFiltered: number;
  recordsTotal: number;
  total: number;
  totalPages: number;
  pageSize: number;
  page: number;
  hasNextPage: boolean
}

export interface CompanyProps {
  id: number;
  companyName: string;
  companyAddress: string;
  companyPhone: string;
  addressToPrintReport: string;
  orderDocPrefix: string;
  companySupportEmail: string;
  nameToPrintReport: string;
  countryId?: number;
  provinceId?: number;
  districtId?: number;
  wardId?: number;
  companyEnglishName: string;
  companyRegistration: string;
  companyTitle: string;
  companyFax: string;
  companyHotline: string;
  companySaleEmail: string;
  website: string;
  visiblePOSMobileApp: boolean;
  companyLogo: string;
  posCustomerBill: number;
  posSavedBill: number;
  posWarehouseBill: number;
  posDefaultPrinter: number;
  stampDefaultPrinter: number;
  numberGroupSeparator: number;
  active: boolean;
  parentId: number
}

export interface PrinterProps {
  disabled: boolean,
  group: any,
  selected: boolean,
  text: string,
  value: number
}

export interface SystemsCompanyState {
  createCompanyModal: Object;
  companyData: CompanyData;
  company: CompanyProps;
  printer: Array<PrinterProps>
}
