import axios from "axios";
import jsonPlaceholder from "../../API/JsonPlaceholder";

export const AuthActionType = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAIL: "LOGOUT_FAIL",
};
// Login Action
export const loginAuthAction = (userState, history) => {
  return async (dispatch) => {
    try {
      const res = await jsonPlaceholder.post(
        "https://localhost:44354/api/Users/Login",
        {
          emailAddress: userState.email,
          password: userState.password,
        }
      );
      const { data } = res;
      dispatch({
        type: AuthActionType.LOGIN_SUCCESS,
        payload: data,
      });

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer${data.accesstoken}`;
      history.push("/dashboard");
    } catch (error) {
      console.error(error);
      dispatch({
        type: AuthActionType.LOGIN_FAIL,
        payload: {},
      });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    try {
      dispatch({
        type: AuthActionType.LOGOUT_SUCCESS,
        payload: {},
      });
      localStorage.removeItem("auth");
    } catch {
      dispatch({
        type: AuthActionType.LOGOUT_FAIL,
        payload: {},
      });
      localStorage.removeItem("auth");
    }
  };
};
