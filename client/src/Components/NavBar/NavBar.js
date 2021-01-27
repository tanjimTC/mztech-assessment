import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const hide = () => {
    let aria = document
      .getElementById("collapsed")
      .getAttribute("aria-expanded");
    if (aria === "true") {
      let element = document.getElementById("navbarNav");
      element.classList.remove("show");
      let x = document.getElementById("collapsed");
      x.classList.add("collapsed");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="highLight">MZ</span> T
          <span className="highLight">e</span>ch
        </Link>
        <button
          id="collapsed"
          className="navbar-toggler navbar-toggler-right collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <span> </span>
          <span> </span>
          <span> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-3">
              <Link onClick={() => hide()} className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link onClick={() => hide()} className="nav-link" to="/account">
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
