import { PagedListModel, SearchModel } from "../appTypes/baseModel";

export interface CreateCompanyBankProps {
  bankCode: string,
  bankName: string,
  bankAddress: string,
  bankAccountName: string,
  bankAccountNumber: string,
  accountingCodeId: number,
  paypalAccount: string,
  paypalNumber: string,
  cifCode: string,
  iebCode: string,
  companyId: number
}

export interface CompanyBankProps {
  id: number,
  bankCode: string,
  bankName: string,
  bankAddress: string,
  bankAccountName: string,
  bankAccountNumber: string,
  accountingCodeId: number,
  paypalAccount: string,
  paypalNumber: string,
  cifCode: string,
  iebCode: string,
  companyId: number
}


export interface CompanyBankState {
  companyBankInfoDataResource: PagedListModel<CompanyBankProps>
  bankInfo: CompanyBankProps,
  bankType: Array<any>
  accountingCode: Array<any>
}

export class BankSearchModel extends SearchModel {
  bankName?: string;
}