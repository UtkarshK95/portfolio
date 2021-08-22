import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-gray-600 "
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4  ">
        Home
      </Link>

      <Link to="/about" className="p-4 hover: ">
        {" "}
        About
      </Link>
      <Link to="/projects" className="p-4 hover: ">
        Projects
      </Link>
      <Link to="/contact" className="p-4 hover: ">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
