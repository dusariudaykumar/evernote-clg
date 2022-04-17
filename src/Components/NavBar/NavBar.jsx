import { useState } from "react";
import { Link } from "react-router-dom";
import { FilterModel } from "../index";

import "./NavBar.css";
const NavBar = () => {
  const [showFilterModel, setShowFilterModel] = useState(false);

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
      <div className="search-wrapper">
        <input
          type="search"
          className="note-search-feild"
          placeholder="Search.."
        />
        <span className="filter-icon-wrapper">
          <span
            className="material-icons filter-icon"
            onClick={() => setShowFilterModel((prev) => !prev)}>
            filter_alt
          </span>
          {showFilterModel && <FilterModel />}
        </span>
      </div>
    </nav>
  );
};

export { NavBar };
