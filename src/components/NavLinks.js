import React from "react";
import { useLocation, Link } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";

const NavLinks = (props) => {
  const location = useLocation();

  return (
    <>
      <ul className="flex flex-row max-medium:flex-col px-3 py-3 text-white pt-5  text-lg font-bold items-center">
        <Link to="/">
          <li
            className={"px-5 max-medium:p-3" + (location.pathname === "/" ? " text-yellow-400" : "")}
            onClick={() => {
              props.isMobile && props.closeMobileMenu();
            }}
          >
            <a>Home</a>
          </li>
        </Link>

        <Link to="/about">
          <li
            className={"px-5 max-medium:p-3" + (location.pathname === "/about" ? " text-yellow-400" : "")}
            onClick={() => {
              props.isMobile && props.closeMobileMenu();
            }}
          >
            <a>About</a>
          </li>
        </Link>
        <Link to="/project">
          <li
            className={"px-5 max-medium:p-3" + (location.pathname === "/project" ? " text-yellow-400" : "")}
            onClick={() => {
              props.isMobile && props.closeMobileMenu();
            }}
          >
            <a>Projects</a>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default NavLinks;
