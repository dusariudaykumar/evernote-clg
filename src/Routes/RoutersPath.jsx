import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Pages/HomePage/Homepage";
import { LandingPage } from "../Pages/LandingPage/LandingPage";

const RoutersPath = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
};

export { RoutersPath };
