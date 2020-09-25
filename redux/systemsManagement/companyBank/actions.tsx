import { CompanyBankProps, CreateCompanyBankProps } from "../../../@types/company/companyBank"

export const actionTypes = {
  CREAT_COMPANY_BANK: 'CREAT_COMPANY_BANK',
  CHANGE_COMPANY_BANK: 'CHANGE_COMPANY_BANK',
  GET_COMPANY_BANK_INFO: 'GET_COMPANY_BANK_INFO',
  SET_COMPANY_BANK_INFO: 'SET_COMPANY_BANK_INFO',
  GET_BANK_INFO: 'GET_BANK_INFO',
  SET_BANK_INFO: 'SET_BANK_INFO',
  GET_BANK_TYPE: 'GET_BANK_TYPE',
  SET_BANK_TYPE: 'SET_BANK_TYPE'
}

export function createCompanyBank(createCompanyBankModal: CreateCompanyBankProps) {
  return {
    type: actionTypes.CREAT_COMPANY_BANK,
    createCompanyBankModal,
  }
}

export function changeCompanyBank(changeCompanyBankModal: CompanyBankProps) {
  return {
    type: actionTypes.CHANGE_COMPANY_BANK,
    changeCompanyBankModal
  }
}

export const getCompanyBankInfo = () => ({
  type: actionTypes.GET_COMPANY_BANK_INFO,
})

export const getBankInfo = (bankId: number) => ({
  type: actionTypes.GET_BANK_INFO,
  bankId
})

export const setBankInfo = (bankInfo: CompanyBankProps) => ({
  type: actionTypes.SET_BANK_INFO,
  bankInfo
})

export const getBankType = () => ({
  type: actionTypes.GET_BANK_TYPE,
})

export const setBankType = (bankType: Array<any>) => ({
  type: actionTypes.SET_BANK_TYPE,
  bankType
})


export function setCompanyBankInfo(companyBankInfo: any) {
  return {
    type: actionTypes.SET_COMPANY_BANK_INFO,
    companyBankInfo,
  }
}