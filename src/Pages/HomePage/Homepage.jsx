import React from "react";
import { NotesCard, NotesField, SideNav } from "../../Components";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="home-page-wrapper">
      <SideNav />
      <NotesField />
      <NotesCard />
    </div>
  );
};

export { Homepage };
