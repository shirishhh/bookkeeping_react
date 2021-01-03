import { AuthActionType } from "../actions/AuthAction";

const authState = {
  isLoggedIn: false,
  user: {
    accessToken: "",
    refreshToken: "",
    userId: 0,
    emailAddress: "",
    password: "",
    source: "",
    firstName: "",
    middleName: "",
    lastName: "",
    roleId: 0,
  },
};

const getAuthState = () => {
  try {
    const authObj = JSON.parse(localStorage.getItem("auth"));
    const newAuthObj = {
      isLoggedIn: true,
      user: {
        accessToken: authObj.user.accessToken,
        refreshToken: authObj.user.refreshToken,
        userId: authObj.user.userId,
        emailAddress: authObj.user.emailAddress,
        password: authObj.user.password,
        source: authObj.user.source,
        firstName: authObj.user.firstName,
        middleName: authObj.user.middleName,
        lastName: authObj.user.lastName,
        roleId: authObj.user.roleId,
      },
    };
    return newAuthObj;
  } catch (error) {
    return authState;
  }
};

const newAuth = getAuthState();

const authReducer = (state = newAuth, action) => {
  switch (action.type) {
    case AuthActionType.LOGIN_SUCCESS:
      const newAuthState = {
        isLoggedIn: true,
        user: action.payload,
      };
      localStorage.setItem("auth", JSON.stringify(newAuthState));
      return newAuthState;
    case AuthActionType.LOGIN_FAIL:
      return state;
    case AuthActionType.LOGOUT_SUCCESS:
      return { ...state, ...authState };
    case AuthActionType.LOGOUT_FAIL:
      return state;
    default:
      return state;
  }
};

export default authReducer;
