import React from "react";
import camera from "../../../fakeData/camera";
import NavBar from "../../NavBar/NavBar";
import Product from "../Product";
import "../Products.css";

const Cameras = () => {
  return (
    <div>
      <NavBar />
      <div className="heading">
        <h2 className="text-center">
          Cam<span className="name-highlight">er</span>a
        </h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        <div className="row text-center " id="skill-animation">
          {camera.map((x) => (
            <Product product={x} key={x.key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cameras;
