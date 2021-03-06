import { combineReducers } from "redux";
import dynamicState from "./dynamic/reducer";
import loginState from "./login/reducer"
import systemsCompanyState from "./systemsManagement/company/reducer"
import locationState from "./location/reducer"
import companyBankState from "./systemsManagement/companyBank/reducer"
import staffState from "./systemsManagement/staff/reducer"
import systemDepartmentState from './systemsManagement/department/reducer'

export default combineReducers({
  dynamicState,
  loginState,
  systemsCompanyState,
  locationState,
  companyBankState,
  staffState,
  systemDepartmentState
});
