import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import the icon you want to use

const Navbar = ({ toggle }) => {
  const linkClassName = ({ isActive }) =>
    `p-4 shadow-lg border focus:outline-none font-medium px-5 py-3 rounded-lg cursor-pointer transition-colors duration-150 ${
      isActive
        ? "border-green-500 text-green-400"
        : "border-transparent text-gray-200 hover:shadow-md hover:border-gray-500"
    }`;

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
        <FaBars className="w-8 h-8" />
      </button>
      <div className="pr-8 md:block hidden">
        <NavLink to="/" className={linkClassName}>Home</NavLink>
        <NavLink to="/about" className={linkClassName}>About</NavLink>
        <NavLink to="/projects" className={linkClassName}>Projects</NavLink>
        <NavLink to="/contact" className={linkClassName}>Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
