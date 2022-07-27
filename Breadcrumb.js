import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <>
      <div>
        <div classs="mybreadcrumb">
          <ul class="breadcrumb">
            <li>
              {" "}
              <Link to="/">/books/1</Link>{" "}
            </li>
            <li>
              <Link to="/characters"> /Characters/583</Link>{" "}
            </li>
            <li>
              <Link to="/house"> or /Houses/378</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
