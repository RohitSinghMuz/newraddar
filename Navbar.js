import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="mynav">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/documentation">DOCUMENTATION</Link>
          </li>
          <li>
            {" "}
            <Link to="/sponsor">SPONSOR</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
