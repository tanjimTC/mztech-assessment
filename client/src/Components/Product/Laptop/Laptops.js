import React from "react";
import laptop from "../../../fakeData/laptop";
import NavBar from "../../NavBar/NavBar";
import Product from "../Product";
import "../Products.css";

const Laptops = () => {
  return (
    <div>
      <NavBar />
      <div className="heading">
        <h2 className="text-center">
          lap<span className="name-highlight">to</span>p
        </h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        <div className="row text-center " id="skill-animation">
          {laptop.map((x) => (
            <Product product={x} key={x.key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laptops;
