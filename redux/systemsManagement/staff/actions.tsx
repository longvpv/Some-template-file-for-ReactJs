import createCompanyModal, { CompanyProps, PrinterProps } from "../../../@types/company/createCompany"

export const actionTypes = {
  CREAT_COMPANY: 'CREAT_COMPANY',
  GET_COMPANY: 'GET_COMPANY',
  SET_COMPANY: 'SET_COMPANY',
  UPLOAD_LOGO: 'UPLOAD_LOGO',
  GET_COMPANY_LIST: 'GET_COMPANY_LIST',
  SET_COMPANY_LIST: 'SET_COMPANY_LIST',
  DELETE_COMPANY: 'DELETE_COMPANY',
  SET_PRINTER: 'SET_PRINTER'

}

export function createCompany(createCompanyModal: createCompanyModal) {
  return {
    type: actionTypes.CREAT_COMPANY,
    createCompanyModal,
  }
}

export const getCompanyList = () => ({
  type: actionTypes.GET_COMPANY_LIST,
})


