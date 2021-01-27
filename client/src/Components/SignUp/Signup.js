import React from "react";
import "./SignUp.css";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signUp } from "../../redux/actions/authActions";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    signUp,
    currentAuthState,
  } = props;
  let history = useHistory();
  const formData = async (data) => {
    try {
      console.log("called", data);
      await signUp(data);
      reset();
      if (currentAuthState.errorMessage) {
        history.push({
          pathname: "/product",
          // search: "?query=abc",
          // state: { detail: currentAuthState },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div
          className="alert alert-primary"
          id="accountAlert"
          role="alert"
          style={{ display: "none" }}
        >
          account created successfully!
        </div>
        <div className="row d-flex justify-content-center  my-5">
          <div className="col-md-6 px-3 form-left">
            <div className="alert alert-primary">
              <h6 className="text-center">Sign up</h6>
            </div>
            <form onSubmit={handleSubmit(formData)}>
              <div className="form-group">
                {/* <label>Email</label> */}
                <div>
                  <Field
                    name="email"
                    component="input"
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
              </div>
              <br />
              <div className="form-group">
                {/* <label>Password</label> */}
                <div>
                  <Field
                    name="password"
                    id="password"
                    component="input"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
              </div>

              {currentAuthState.errorMessage ? (
                <div className="alert alert-danger">
                  {currentAuthState.errorMessage}
                </div>
              ) : null}

              <div className="mt-2">
                <button
                  className="btn btn-primary me-2"
                  type="submit"
                  disabled={pristine || submitting}
                >
                  Sign up
                </button>
                <button
                  type="button"
                  disabled={pristine || submitting}
                  onClick={reset}
                  className="btn btn-danger "
                >
                  Clear Values
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentAuthState: state.auth,
  };
};

const mapDispatchToProps = {
  signUp: signUp,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "signup" })
)(Signup);
