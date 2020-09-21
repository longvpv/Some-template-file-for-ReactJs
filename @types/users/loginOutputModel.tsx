
export default interface LoginOutputModel {
  accessToken: string,
  refreshToken: string,
  expires: Date
}

export interface LoginState {
  loginModal: string
}