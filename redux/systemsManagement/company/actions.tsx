import { PagedListModel } from "../../../@types/appTypes/baseModel"
import { CompanySearchModel } from "../../../@types/company/companyModels"
import createCompanyModal, { CompanyProps, PrinterProps } from "../../../@types/company/createCompany"

export const actionTypes = {
  CREAT_COMPANY: 'CREAT_COMPANY',
  GET_COMPANY: 'GET_COMPANY',
  SET_COMPANY: 'SET_COMPANY',
  UPLOAD_LOGO: 'UPLOAD_LOGO',
  GET_COMPANY_LIST: 'GET_COMPANY_LIST',
  SET_COMPANY_LIST: 'SET_COMPANY_LIST',
  DELETE_COMPANY: 'DELETE_COMPANY',
  SET_PRINTER: 'SET_PRINTER',
  CHANGE_COMPANY: 'CHANGE_COMPANY'

}

export function createCompany(createCompanyModal: createCompanyModal) {
  return {
    type: actionTypes.CREAT_COMPANY,
    createCompanyModal,
  }
}
export function changeCompany(changeCompanyModal: CompanyProps) {
  return {
    type: actionTypes.CHANGE_COMPANY,
    changeCompanyModal,
  }
}

export const getCompanyList = (searchModel?: CompanySearchModel) => ({
  type: actionTypes.GET_COMPANY_LIST,
  searchModel
});

export const deleteCompany = (companyId: Array<(number | string)>) => ({
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

export function setCompanyList(companyDataSource: PagedListModel<CompanyProps>) {
  return {
    type: actionTypes.SET_COMPANY_LIST,
    companyDataSource,
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



