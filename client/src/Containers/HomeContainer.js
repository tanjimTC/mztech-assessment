import React from "react";
import Home from "../Components/Home/Home";
import NavBar from "../Components/NavBar/NavBar";
import Products from "../Components/Product/Products";

const HomeContainer = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Products />
    </div>
  );
};

export default HomeContainer;
