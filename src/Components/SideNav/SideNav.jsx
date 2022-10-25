import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./SideNav.css";
const SideNav = ({ isOpenSideMenu }) => {
  const logoutHandler = () => {
    localStorage.clear();
    navigate(0);
  };
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const getActiveStyle = () => ({
    backgroundColor: "#41331c",
  });
  console.log(pathname == "/home");
  return (
    <div
      className={
        isOpenSideMenu
          ? ` side-nav flex-col toggle-width`
          : `side-nav flex-col expanded-menu`
      }>
      <ul className="nav-items">
        <li>
          <NavLink to="/home">
            <div
              style={{
                backgroundColor: pathname === "/home" ? "#41331c" : "#202124",
              }}
              className={
                isOpenSideMenu
                  ? `flex nav-icon-container toggled-expanded-menu`
                  : `flex nav-icon-container toggled-closed-menu`
              }>
              <span className="material-icons-outlined side-nav-icon ">
                home
              </span>
              <span>Home</span>
            </div>
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/label"
            className={isOpenSideMenu ? `toggle-menu` : `nav-pill`}>
            <div
              style={{
                backgroundColor: pathname === "/label" ? "#41331c" : "#202124",
              }}
              className={
                isOpenSideMenu
                  ? `flex nav-icon-container toggled-expanded-menu`
                  : `flex nav-icon-container toggled-closed-menu`
              }>
              <span className="material-icons-outlined side-nav-icon">
                label
              </span>
              <span>Label</span>
            </div>
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/archive"
            className={isOpenSideMenu ? `toggle-menu` : `nav-pill`}>
            <div
              style={{
                backgroundColor:
                  pathname === "/archive" ? "#41331c" : "#202124",
              }}
              className={
                isOpenSideMenu
                  ? `flex nav-icon-container toggled-expanded-menu`
                  : `flex nav-icon-container toggled-closed-menu`
              }>
              <span className="material-icons-outlined side-nav-icon">
                archive
              </span>
              <span>Archive</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trash"
            className={isOpenSideMenu ? `toggle-menu` : `nav-pill`}>
            <div
              style={{
                backgroundColor: pathname === "/trash" ? "#41331c" : "#202124",
              }}
              className={
                isOpenSideMenu
                  ? `flex nav-icon-container toggled-expanded-menu`
                  : `flex nav-icon-container toggled-closed-menu`
              }>
              <span className="material-icons-outlined side-nav-icon">
                delete
              </span>
              <span>Trash</span>
            </div>
          </NavLink>
        </li>
      </ul>
      <div
        className={
          isOpenSideMenu
            ? `flex nav-icon-container toggled-expanded-menu`
            : `flex nav-icon-container toggled-closed-menu`
        }>
        {/* {!isOpenSideMenu && <div className="user-name">{userData.name}</div>} */}
        <span
          className="material-icons side-nav-icon logout-icon"
          onClick={logoutHandler}>
          logout
        </span>
        <span className="logout">Logout</span>
      </div>
    </div>
  );
};

export { SideNav };
