import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-gray-600 hover:border-green-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/home" className="p-4 border-green-500">
        Homet
      </Link>

      <Link to="/about" className="p-4 hover:border-green-500">
        {" "}
        About
      </Link>
      <Link to="/projects" className="p-4 hover:border-green-500">
        Projects
      </Link>
      <Link to="/contact" className="p-4 hover:border-green-500">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
