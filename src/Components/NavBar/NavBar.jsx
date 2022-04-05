import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav className="navigation-bar nav-container flex">
        <div className=" nav-left-wrapper flex">
          <p className="hamberger-icon hide-content">
            <i className="material-icons-outlined">menu</i>
          </p>
          <h4 className="logo brand-name">
            <Link to="/"> Notes App </Link>
          </h4>
        </div>
      </nav>
    </div>
  );
};

export { NavBar };
