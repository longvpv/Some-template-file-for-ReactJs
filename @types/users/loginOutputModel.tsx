import { BaseResultModel } from "../appTypes/baseModel";

export default interface LoginOutputModel {
  accessToken: string,
  refreshToken: string,
  expires: Date
}