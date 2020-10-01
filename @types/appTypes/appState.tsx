import { CompanyBankState } from "../company/companyBank";
import { SystemsCompanyState } from "../company/createCompany";
import DynamicState from "../dynamic/dynamicState";
import { StaffState } from "../staff/staffState";
import { LoginState } from "../users/loginOutputModel";
import LocationState from "./locationState";

export default interface AppState {
  dynamicState: DynamicState,
  loginState: LoginState,
  systemsCompanyState: SystemsCompanyState,
  locationState: LocationState,
  companyBankState: CompanyBankState,
  staffState: StaffState
}
