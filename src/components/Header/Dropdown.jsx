import React from "react";
import { NavLink } from "react-router-dom";

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
      <NavLink to="/" className="p-4  ">
        Home
      </NavLink>

      <NavLink to="/about" className="p-4 hover: ">
        {" "}
        About
      </NavLink>
      <NavLink to="/projects" className="p-4 hover: ">
        Projects
      </NavLink>
      <NavLink to="/contact" className="p-4 hover: ">
        Contact
      </NavLink>
    </div>
  );
};

export default Dropdown;
