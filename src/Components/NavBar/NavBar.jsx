import { Avatar, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, useNotes } from "../../contexts";
import { useDebounce } from "../../Utils";
import { FilterModel } from "../index";

import "./NavBar.css";
const NavBar = ({ setIsOpenSideMenu }) => {
  const [showFilterModel, setShowFilterModel] = useState(false);
  const [queryValue, setQueryValue] = useState("");
  const debouncedValue = useDebounce(queryValue);
  const {
    authState: { userData },
  } = useAuth();
  const { noteDispatch } = useNotes();
  useEffect(() => {
    noteDispatch({ type: "SEARCH_QUERY", payload: debouncedValue });
  }, [queryValue, debouncedValue]);
  return (
    <nav className="navigation-bar nav-container flex">
      <div className=" nav-left-wrapper flex">
        <div
          className="hamberger-icon "
          onClick={() => setIsOpenSideMenu((prev) => !prev)}>
          <i className="material-icons-outlined">menu</i>
        </div>
        <h4 className="logo ">
          <Link to="/" className="brand-name">
            EverNote
          </Link>
        </h4>
      </div>
      <div className="search-wrapper">
        <input
          type="search"
          className="note-search-feild"
          placeholder="Search.."
          onChange={(e) => setQueryValue(e.target.value)}
        />
        <span className="filter-icon-wrapper">
          <span
            className="material-icons filter-icon"
            onClick={() => setShowFilterModel((prev) => !prev)}>
            filter_alt
          </span>
          {showFilterModel && (
            <FilterModel setShowFilterModel={setShowFilterModel} />
          )}
        </span>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginRight: "15px",
          gap: "5px",
        }}>
        <Avatar sx={{ width: 29, height: 29, textTransform: "capitalize" }}>
          {userData.name[0]}
        </Avatar>
        <Typography sx={{ textTransform: "capitalize", fontSize: "1.2rem" }}>
          {userData.name}
        </Typography>
      </Box>
    </nav>
  );
};

export { NavBar };
