// import DynamicState from "../../@types/dynamic/dynamicState";

import { actionTypes } from './actions'

const initializeState = {
  createCompanyModal: {}
}

export default function reducer(state = initializeState, action: any) {
  switch (action.type) {
    case actionTypes.CREAT_COMPANY:
      return {
        ...state,
        createCompanyModal: action.createCompanyModal
      }


    default:
      return state;
  }
}