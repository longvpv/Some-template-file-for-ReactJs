export const actionTypes = {
  CREAT_COMPANY: 'CREAT_COMPANY',

}

export function createCompany(createCompanyModal: Object) {
  return {
    type: actionTypes.CREAT_COMPANY,
    createCompanyModal,
  }
}




