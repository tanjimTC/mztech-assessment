import React from "react";
import "./Products.css";
import phone from "../../assets/categories/phone.png";
import camera from "../../assets/categories/camera.png";
import laptop from "../../assets/categories/laptop.png";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <div className="container cetagories ">
        <h2 className="text-center mb-4">Categories</h2>
        <div className="row text-white ">
          <div className="col-md-4 ">
            <Link to="/catgoryphone">
              <div className="cat1 cat d-flex justify-content-between align-items-center">
                <h3>Phone</h3>
                <img className="img-fluid" src={phone} alt="Watch" />
              </div>
            </Link>
          </div>
          <div className="col-md-4 ">
            <Link to="/catgorycamera">
              <div className="cat2 cat d-flex justify-content-between align-items-center">
                <h3>Camera</h3>
                <img className="img-fluid" src={camera} alt="Bag" />
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/catgorylaptop">
              <div className="cat3 cat d-flex justify-content-between align-items-center">
                <h3>Laptop</h3>
                <img className="img-fluid" src={laptop} alt="Shoes" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
