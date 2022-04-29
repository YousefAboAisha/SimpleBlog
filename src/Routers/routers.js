import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Containers/Home/home";
import Services from "../Containers/Services/services";
import Contact from "../Containers/Contact/contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      <Route path={"*"} element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routers;
