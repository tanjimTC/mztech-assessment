import {
  AUTH_ERROR,
  AUTH_ERROR2,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
} from "../actions/authActions";

const initialState = {
  isAuthenticated: false,
  token: "",
  errorMessage: "",
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        errorMessage: "",
      };

    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        errorMessage: "",
      };
    case SIGN_OUT:
      console.log("sign out called");
      return {
        ...state,
        isAuthenticated: false,
        token: action.payload,
        errorMessage: "",
      };
    case AUTH_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: action.payload,
      };
    case AUTH_ERROR2:
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authReducers;
