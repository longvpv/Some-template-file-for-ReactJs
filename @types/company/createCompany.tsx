import { PagedListModel } from "../appTypes/baseModel";

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
  companyCode: string

};

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
  parentId: number,
  companyCode: string
}

export interface PrinterProps {
  disabled: boolean,
  group: any,
  selected: boolean,
  text: string,
  value: number
}



export interface SystemsCompanyState {
  createCompanyModal: createCompanyModal;
  company: CompanyProps;
  printer: Array<PrinterProps>;
  companyDataSource: PagedListModel<CompanyProps>
}
