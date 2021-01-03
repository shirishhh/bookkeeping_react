import JsonPlaceholder from "../../API/JsonPlaceholder";

export const CompanyActionType = {
  COMPANYLISTSUCCESS: "COMPANYLIST_SUCCESS",
  COMPANYLISTFAIL: "COMPANYLIST_FAIL",
  ADDCOMPANYSUCCESS: "ADDCOMPANY_SUCCESS",
  ADDCOMPANYFAIL: "ADDCOMPANY_FAIL",
};

export const getCompanyAction = (userId) => {
  return async (dispatch) => {
    try {
      const res = await JsonPlaceholder.get(
        "/Companies/GetCompanyByUser/" + userId
      );
      const { data } = res;
      dispatch({
        type: CompanyActionType.COMPANYLISTSUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: CompanyActionType.COMPANYLISTFAIL,
        payload: {},
      });
    }
  };
};
export const addCompanyAction = (formValues) => {
  return async (dispatch) => {
    try {
      const res = await JsonPlaceholder.post(
        "/Companies/AddCompany",
        formValues
      );
      const { data } = res;
      dispatch({
        type: CompanyActionType.ADDCOMPANYSUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CompanyActionType.ADDCOMPANYFAIL,
        payload: {},
      });
    }
  };
};
