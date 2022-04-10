import Mockman from "mockman-js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage, LandingPage, Login, SignUp } from "../Pages";
import { ProtectedRoute } from "./ProtectedRoute";

const RoutersPath = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mockman" element={<Mockman />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Homepage />} />
      </Route>
    </Routes>
  );
};

export { RoutersPath };
