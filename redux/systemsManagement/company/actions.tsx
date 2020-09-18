import createCompanyModal from "../../../@types/company/createCompany"

export const actionTypes = {
  CREAT_COMPANY: 'CREAT_COMPANY',
  UPLOAD_LOGO: 'UPLOAD_LOGO'

}

export function createCompany(createCompanyModal: createCompanyModal) {
  return {
    type: actionTypes.CREAT_COMPANY,
    createCompanyModal,
  }
}

export function uploadLogo(file) {
  return {
    type: actionTypes.UPLOAD_LOGO,
    file,
  }
}



