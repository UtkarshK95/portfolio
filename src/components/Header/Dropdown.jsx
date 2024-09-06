import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  // Define the common class name for the NavLinks
  const baseNavLinkClass = "p-4 hover:text-white";

  return (
    <div
      className={`${
        isOpen
          ? "fixed w-full grid grid-rows-4 text-center items-center bg-gray-600 opacity-90"
          : "hidden"
      }`}
      onClick={toggle}
      aria-expanded={isOpen}
      aria-hidden={!isOpen}
    >
      <NavLink to="/" className={baseNavLinkClass} aria-label="Home">
        Home
      </NavLink>
      <NavLink to="/about" className={baseNavLinkClass} aria-label="About">
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={baseNavLinkClass}
        aria-label="Projects"
      >
        Projects
      </NavLink>
      <NavLink to="/contact" className={baseNavLinkClass} aria-label="Contact">
        Contact
      </NavLink>
    </div>
  );
};

export default Dropdown;
