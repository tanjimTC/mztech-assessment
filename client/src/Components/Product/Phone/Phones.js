import React from "react";
import phone from "../../../fakeData/Phone";
import NavBar from "../../NavBar/NavBar";
import Product from "../Product";
import "../Products.css";

const Phones = () => {
  return (
    <div>
      <NavBar />
      <div className="heading">
        <h2 className="text-center">
          Ph<span className="name-highlight">O</span>ne
        </h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        <div className="row text-center " id="skill-animation">
          {phone.map((x) => (
            <Product product={x} key={x.key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phones;
