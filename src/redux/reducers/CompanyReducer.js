import { CompanyActionType } from "../actions/CompanyAction";
import _ from "lodash";

export const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case CompanyActionType.COMPANYLISTSUCCESS:
      return { ...state, ..._.mapKeys(action.payload, "companyId") };
    case CompanyActionType.COMPANYLISTFAIL:
      return state;
    default:
      return state;
  }
};

export const addCompanyReducer = (state = {}, action) => {
  switch (action.type) {
    case CompanyActionType.ADDCOMPANYSUCCESS:
      return action.payload;
    case CompanyActionType.ADDCOMPANYFAIL:
      return state;
    default:
      return state;
  }
};
