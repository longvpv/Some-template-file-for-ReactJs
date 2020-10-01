import { SystemsCompanyState } from '../../../@types/company/createCompany';
import { StaffState } from '../../../@types/staff/staffState';
// import DynamicState from "../../@types/dynamic/dynamicState";

import { actionTypes } from './actions'

const initializeState: StaffState = {
  allStaff: []
}

export default function reducer(state = initializeState, action: any) {
  switch (action.type) {
    case actionTypes.SET_ALL_STAFF:
      return {
        ...state,
        allStaff: action.allStaff
      }


    default:
      return state;
  }
}