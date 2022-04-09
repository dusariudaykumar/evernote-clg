import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navigation-bar nav-container flex">
      <div className=" nav-left-wrapper flex">
        <p className="hamberger-icon ">
          <i className="material-icons-outlined">menu</i>
        </p>
        <h4 className="logo ">
          <Link to="/" className="brand-name">
            Notes App
          </Link>
        </h4>
      </div>
    </nav>
  );
};

export { NavBar };
