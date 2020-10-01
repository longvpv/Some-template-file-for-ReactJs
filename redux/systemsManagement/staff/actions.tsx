import createCompanyModal, { CompanyProps, PrinterProps } from "../../../@types/company/createCompany"
import { CreateStaffModal } from "../../../@types/staff/staffState"

export const actionTypes = {
  CREATE_STAFF: 'CREATE_STAFF',
  GET_ALL_STAFF: 'GET_ALL_STAFF',
  SET_ALL_STAFF: 'SET_ALL_STAFF'

}

export function createStaff(createStaffModal: CreateStaffModal) {
  return {
    type: actionTypes.CREATE_STAFF,
    createStaffModal,
  }
}



export const getAllStaff = () => ({
  type: actionTypes.GET_ALL_STAFF,
})


export const setAllStaff = (allStaff) => ({
  type: actionTypes.SET_ALL_STAFF,
  allStaff
})