import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.css";
const SideNav = ({ setIsnoteInputVisible }) => {
  return (
    <div className="side-nav flex-col">
      <ul className="nav-items">
        <li className="nav-pill">
          <Link to="/home" className="nav-link">
            <div className="flex nav-icon-container">
              <span className="material-icons-outlined side-nav-icon ">
                home
              </span>
              <span>Home</span>
            </div>
          </Link>
        </li>
        <li className="nav-pill">
          <Link to="/home" className="nav-link">
            <div className="flex nav-icon-container">
              <span className="material-icons-outlined side-nav-icon">
                <span className="material-icons-outlined side-nav-icon">
                  label
                </span>
              </span>
              <span>Label</span>
            </div>
          </Link>
        </li>
        <li className="nav-pill">
          <Link to="/home" className="nav-link">
            <div className="flex nav-icon-container">
              <span className="material-icons-outlined side-nav-icon">
                archive
              </span>
              <span>Archive</span>
            </div>
          </Link>
        </li>
        <li className="nav-pill">
          <Link to="/home" className="nav-link">
            <div className="flex nav-icon-container">
              <span className="material-icons-outlined side-nav-icon">
                delete
              </span>
              <span>Trash</span>
            </div>
          </Link>
        </li>
      </ul>
      <div className="logout-container flex">
        <div className="user-name">Uday Kumar</div>
        <span className="material-icons side-nav-icon">logout</span>
      </div>
    </div>
  );
};

export { SideNav };
