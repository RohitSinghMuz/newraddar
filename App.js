import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Documentation from "./Documentation";
import Sponsor from "./Sponsor";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/documentation" element={<Documentation />}></Route>
        <Route exact path="/sponsor" element={<Sponsor />}></Route>
      </Routes>
    </>
  );
};

export default App;
