import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import { reducer as formReducer } from "redux-form";
import { companyReducer } from "./CompanyReducer";
import { addCompanyReducer } from "./CompanyReducer";

export default combineReducers({
  auth: authReducer,
  companyList: companyReducer,
  form: formReducer,
  addCompany: addCompanyReducer,
});
