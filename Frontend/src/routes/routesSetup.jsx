import React from "react";
import { Routes, Route } from "react-router-dom";
import { routesName } from "../helper/helper.jsx";

const routesSetup = () => {
  return (
    <Routes>
      {routesName.map((item, id) => {
        return <Route key={id} path={item.path} element={item.element} />;
      })}
    </Routes>
  );
};

export default routesSetup;
