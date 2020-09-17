
import { actionTypes } from './actions'

const initializeState = {
  loginModal: '',
}

export default function reducer(state = initializeState, action: any) {
  switch (action.type) {

    case actionTypes.LOGIN:
      return {
        ...state,
        loginModal: action.loginModal
      }
    default:
      return state;
  }
}