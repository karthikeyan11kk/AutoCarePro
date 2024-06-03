import { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menu } from "../../assets";
import { navLinks } from "./info";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar sticky top-0">
      <div className="flex items-center">
        <img src={logo} alt="hoobank" className="w-16 h-16 md:w-20 md:h-20" />
        <h1 className="ml-2 font-poppins text-xl md:text-2xl font-semibold text-yellowpro">
          AutoCare<span className="text-sm md:text-base">Pro</span>
        </h1>
      </div>
      <div className="flex items-center">
        <ul className="hidden sm:flex list-none justify-end items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-poppins font-bold cursor-pointer text-base ${
                active === nav.title ? "text-yellowpro" : "text-gray-600"
              } mr-6`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <Link
          className="hidden sm:block bg-yellowpro hover:bg-yellowprolight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-6"
          to="/login"
        >
          Login
        </Link>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-12 h-12 sm:hidden ml-6 cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } flex-col sm:hidden p-8 bg-black-gradient absolute top-10 right-0 mt-12 rounded-xl`}
      >
        {navLinks.map((nav) => (
          <Link
            key={nav.id}
            to={`#${nav.id}`}
            className={`font-poppins font-medium cursor-pointer text-base ${
              active === nav.title ? "text-yellowpro" : "text-gray-200"
            } mb-4`}
            onClick={() => {
              setActive(nav.title);
              setToggle(false);
            }}
          >
            {nav.title}
          </Link>
        ))}
        <Link
          to="/login"
          className="bg-yellowpro hover:bg-yellowprolight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
