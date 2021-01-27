import Axios from "axios";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_ERROR2 = "AUTH_ERROR2";

export const signUp = (data) => {
  return async (dispatch) => {
    try {
      const res = await Axios.post("http://localhost:3200/user/signup", data);
      console.log(res);
      dispatch({
        type: SIGN_UP,
        payload: res.data.token,
      });
      localStorage.setItem("mz-Jwt", res.data.token);
    } catch (err) {
      console.log("eeee", err.message);
      // alert("Something went wrong! PLease try again");
      dispatch({
        type: AUTH_ERROR2,
        payload: "Email is already in use",
      });
    }
  };
};

export const signIn = (data) => {
  return async (dispatch) => {
    try {
      const res = await Axios.post("http://localhost:3200/user/signin", data);
      console.log(res.data);
      dispatch({
        type: SIGN_IN,
        payload: res.data.token,
      });
      localStorage.setItem("mz-Jwt", res.data.token);
    } catch (error) {
      console.log("sign in error", error.message);
      dispatch({
        type: AUTH_ERROR,
        payload: "Email or Password is wrong",
      });
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    await localStorage.removeItem("mz-Jwt");
    dispatch({
      type: SIGN_OUT,
      payload: "",
    });
  };
};
