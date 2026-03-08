import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  // Define the common class name for the NavLinks
  const baseNavLinkClass = ({ isActive }) =>
    `block w-full text-center py-4 text-sm font-medium border-b border-gray-700 transition-colors duration-150 ${
      isActive ? "text-green-500 bg-gray-750" : "text-gray-300 hover:text-white hover:bg-gray-700"
    }`;

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} fixed w-full z-40 bg-gray-800 border-b border-gray-700 shadow-lg font-mono`}
      onClick={toggle}
      aria-expanded={isOpen}
      aria-hidden={!isOpen}
    >
      <NavLink to="/" className={baseNavLinkClass} aria-label="Home">Home</NavLink>
      <NavLink to="/about" className={baseNavLinkClass} aria-label="About">About</NavLink>
      <NavLink to="/projects" className={baseNavLinkClass} aria-label="Projects">Projects</NavLink>
      <NavLink to="/contact" className={baseNavLinkClass} aria-label="Contact">Contact</NavLink>
    </div>
  );
};

export default Dropdown;
