import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-gray-800 text-white relative shadow-sm font-mono "
      role="navigation"
    >
      <h3 className="px-4 text-2xl text-[#5C637C] font-light">
        Port<span className="font-semibold text-green-500">folio</span>
      </h3>

      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link
          to="/"
          className="p-4 shadow-lg border border-transparent hover:shadow-md hover:border-gray-500 focus:outline-none font-medium text-gray-200 px-5 py-3 rounded-lg cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="p-4 shadow-lg border border-transparent hover:shadow-md hover:border-gray-500 focus:outline-none font-medium text-gray-200 px-5 py-3 rounded-lg cursor-pointer"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="p-4 shadow-lg border border-transparent hover:shadow-md hover:border-gray-500 focus:outline-none font-medium text-gray-200 px-5 py-3 rounded-lg cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="p-4 shadow-lg border border-transparent hover:shadow-md hover:border-gray-500 focus:outline-none font-medium text-gray-200 px-5 py-3 rounded-lg cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
