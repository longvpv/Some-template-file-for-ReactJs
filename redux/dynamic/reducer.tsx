import { SystemsCompanyState } from "../../@types/company/createCompany";
import DynamicState from "../../@types/dynamic/dynamicState";

import { actionTypes } from './actions'

const initializeState: DynamicState = {
  dynamicLoading: {},
}

export default function reducer(state = initializeState, action: any) {
  const { dynamicLoading } = state;
  switch (action.type) {
    case actionTypes.SET_DYNAMIC_LOADING:
      return {
        ...state,
        dynamicLoading: {
          ...dynamicLoading,
          [action.field]: action.loading
        }
      }


    default:
      return state;
  }
}