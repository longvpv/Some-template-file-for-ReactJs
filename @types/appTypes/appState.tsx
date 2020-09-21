import { SystemsCompanyState } from "../company/createCompany";
import DynamicState from "../dynamic/dynamicState";
import { LoginState } from "../users/loginOutputModel";

export default interface AppState {
  dynamicState: DynamicState,
  loginState: LoginState,
  systemsCompanyState: SystemsCompanyState,
}
