import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Signin from "../Components/SignIn/Signin";
import Signup from "../Components/SignUp/Signup";

const AccountContainer = () => {
  return (
    <div className="container">
      <NavBar />
      <Signup />
      <div class="display-3 text-center mb-5">or</div>
      <Signin />
    </div>
  );
};

export default AccountContainer;
