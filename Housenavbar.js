import React from "react";
import { Routes, Route } from "react-router-dom";
import Character from "./Character";
import House from "./House";
import Books from "./Books";

const Housenavbar = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Books />}></Route>
        <Route exact path="/character" element={<Character />}></Route>
        <Route exact path="/house" element={<House />}></Route>
      </Routes>
    </>
  );
};

export default Housenavbar;
