import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import RoutesSetup from "./routes/routesSetup";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesSetup />
    </BrowserRouter>
  );
};

export default App;
