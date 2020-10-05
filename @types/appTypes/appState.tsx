import { CompanyBankState } from "../company/companyBank";
import { SystemsCompanyState } from "../company/createCompany";
import { SystemsDepartmentState } from "../company/createDepartment";
import DynamicState from "../dynamic/dynamicState";
import { StaffState } from "../staff/staffState";
import { LoginState } from "../users/loginOutputModel";
import LocationState from "./locationState";

export default interface AppState {
  dynamicState: DynamicState,
  loginState: LoginState,
  systemsCompanyState: SystemsCompanyState,
  staffState: StaffState,
  locationState: LocationState,
  companyBankState: CompanyBankState,
  systemDepartmentState: SystemsDepartmentState
}
