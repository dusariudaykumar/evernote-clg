import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
const SideNav = () => {
  return (
    <div className="side-nav">
      <ul className="side-nav-list flex-col">
        <li>
          <Link to="/">
            <span class="material-icons-outlined side-nav-icon ">home</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span class="material-icons-outlined side-nav-icon">label</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span class="material-icons-outlined side-nav-icon">archive</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span class="material-icons-outlined side-nav-icon">delete</span>
          </Link>
        </li>
        <li>
          <span className="material-icons side-nav-icon">logout</span>
        </li>
      </ul>
    </div>
  );
};

export { SideNav };
