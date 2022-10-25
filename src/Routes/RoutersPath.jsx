import Mockman from "mockman-js";
import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ArchivePage,
  Homepage,
  LabelPage,
  LandingPage,
  Login,
  SignUp,
  TrashPage,
} from "../Pages";
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
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/trash" element={<TrashPage />} />
        <Route path="/label" element={<LabelPage />} />
      </Route>
    </Routes>
  );
};

export { RoutersPath };
