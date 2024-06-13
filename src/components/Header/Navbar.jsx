import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import the icon you want to use

const Navbar = ({ toggle }) => {
  const linkClassName =
    "p-4 shadow-lg border border-transparent hover:shadow-md hover:border-gray-500 focus:outline-none font-medium text-gray-200 px-5 py-3 rounded-lg cursor-pointer";

  return (
    <nav
      className="flex justify-between items-center h-16 bg-gray-800 text-white sticky top-0 z-50 shadow-sm font-mono"
      role="navigation"
    >
      <h3 className="px-4 text-2xl text-[#5C637C] font-light">
        Port<span className="font-semibold text-green-500">folio</span>
      </h3>

      <button
        className="px-4 md:hidden"
        onClick={toggle}
        aria-label="Toggle menu"
      >
        <FaBars className="w-8 h-8" /> {/* Use the React Icon component here */}
      </button>
      <div className="pr-8 md:block hidden">
        <NavLink to="/" className={linkClassName} aria-current="page">
          Home
        </NavLink>
        <NavLink to="/about" className={linkClassName} aria-current="page">
          About
        </NavLink>
        <NavLink to="/projects" className={linkClassName} aria-current="page">
          Projects
        </NavLink>
        <NavLink to="/contact" className={linkClassName} aria-current="page">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
