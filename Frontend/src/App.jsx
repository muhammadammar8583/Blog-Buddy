import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import RoutesSetup from "./routes/routesSetup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesSetup />
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
