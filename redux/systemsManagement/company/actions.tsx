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

export const deleteCompany = (companyId: number) => ({
  type: actionTypes.DELETE_COMPANY,
  companyId
})

export const getCompany = (companyId: number) => ({
  type: actionTypes.GET_COMPANY,
  companyId
})

export const setCompany = (company: CompanyProps) => ({
  type: actionTypes.SET_COMPANY,
  company
})

export function setCompanyList(companyData: any) {
  return {
    type: actionTypes.SET_COMPANY_LIST,
    companyData,
  }
}

export function uploadLogo(file) {
  return {
    type: actionTypes.UPLOAD_LOGO,
    file,
  }
}

export function setPrinter(printer: Array<PrinterProps>) {
  return {
    type: actionTypes.SET_PRINTER,
    printer,
  }
}



