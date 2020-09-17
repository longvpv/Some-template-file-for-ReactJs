export const actionTypes = {
  LOGIN: 'LOGIN',
  SOCIAL_LOGIN: 'SOCIAL_LOGIN',
  SAVE_COOKIE_AND_PREPARE_DATA: 'SAVE_COOKIE_AND_PREPARE_DATA',
  SAVE_TOKEN: 'SAVE_TOKEN'
}

export function login(loginModal: Object) {
  return {
    type: actionTypes.LOGIN,
    loginModal,
  }
}



