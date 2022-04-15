import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import "./SideNav.css";
const SideNav = () => {
  const {
    authState: { userData },
  } = useAuth();
  const logoutHandler = () => {
    localStorage.clear();
    navigate(0);
  };
  const navigate = useNavigate();

  const getActiveStyle = () => ({
    backgroundColor: "#41331c",
  });

  return (
    <div className="side-nav flex-col">
      <ul className="nav-items">
        <li className="nav-pill">
          <NavLink className="nav-pill" to="/home">
            <div className="flex nav-icon-container">
              <span className="material-icons-outlined side-nav-icon ">
                home
              </span>
              <span>Home</span>
            </div>
          </NavLink>
        </li>
        <li className="nav-pill">
          <NavLink style={getActiveStyle} to="/home">
            <div className="flex nav-icon-container">
              <span className="material-icons-outlined side-nav-icon">
                label
              </span>
              <span>Label</span>
            </div>
          </NavLink>
        </li>
        <li className="nav-pill">
          <NavLink style={getActiveStyle} to="/archive">
            <div className="flex nav-icon-container">
              <span className="material-icons-outlined side-nav-icon">
                archive
              </span>
              <span>Archive</span>
            </div>
          </NavLink>
        </li>
        <li className="nav-pill">
          <NavLink style={getActiveStyle} to="/trash">
            <div className="flex nav-icon-container">
              <span className="material-icons-outlined side-nav-icon">
                delete
              </span>
              <span>Trash</span>
            </div>
          </NavLink>
        </li>
      </ul>
      <div className="logout-container flex">
        <div className="user-name">
          {userData.firstName + " " + userData.lastName}
        </div>
        <span className="material-icons side-nav-icon" onClick={logoutHandler}>
          logout
        </span>
      </div>
    </div>
  );
};

export { SideNav };
