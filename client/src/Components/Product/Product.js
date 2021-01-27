import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Product = (props) => {
  let { name, img, price, key } = props.product;

  if (name.length > 20) {
    name = name.substring(0, 19) + "...";
  }
  return (
    <div className="col-md-4 " id="skills">
      <div className="skill-item text-center">
        <img src={img} alt="" className="img-fluid" />
        <br />
        <br />
        <h4 className="text-white">{name}</h4>

        <div>
          <p>Price:{price}</p>
        </div>
        <Link to={`/details/${key}`}>
          <button className="btn btn-general btn-portfolio">more info</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
