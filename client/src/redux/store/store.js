import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import thunk from "redux-thunk";
import authReducers from "../reducres/authReducers";

const jwtToken = localStorage.getItem("mz-Jwt");

console.log(jwtToken);

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  auth: authReducers,
});

const store = createStore(
  reducer,
  {
    auth: {
      token: jwtToken,
      isAuthenticated: jwtToken ? true : false,
      errorMessage: "",
    },
  },
  applyMiddleware(thunk)
);

export default store;
