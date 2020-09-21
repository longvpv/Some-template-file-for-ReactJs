import { combineReducers } from "redux";
import dynamicState from "./dynamic/reducer";
import loginState from "./login/reducer"
import systemsCompanyState from "./systemsManagement/company/reducer"

export default combineReducers({
  dynamicState,
  loginState,
  systemsCompanyState
});
