
import { LoginState } from '../../@types/users/loginOutputModel';
import { actionTypes } from './actions'

const initializeState: LoginState = {
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