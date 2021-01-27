import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/authActions";

const Signin = (props) => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    signIn,
    currentAuthState,
  } = props;

  //   let history = useHistory();

  const formData = async (data) => {
    try {
      console.log("called", data);
      await signIn(data);
      reset();
      window.location.reload();
      console.log(currentAuthState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div
          //   style={{ height: "80vh", paddingTop: "15%" }}
          className="row d-flex justify-content-center  "
        >
          <div className="col-md-6 px-3 form-left">
            <div className="alert alert-primary">
              <h6 className="text-center">Sign in</h6>
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
              <br />
              {/* {currentAuthState.errorMessage ? (
                <div className="alert alert-danger">
                  {currentAuthState.errorMessage}
                </div>
              ) : null} */}

              <div className="mt-2">
                <button
                  className="btn btn-primary me-2"
                  type="submit"
                  disabled={pristine || submitting}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  disabled={pristine || submitting}
                  onClick={reset}
                  className="btn btn-danger"
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
  signIn: signIn,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "signin" })
)(Signin);
