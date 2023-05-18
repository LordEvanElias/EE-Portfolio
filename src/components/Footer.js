import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="text-white flex flex-row justify-center pt-6 footer-links">
        <li className="px-4">
          <Link to="/">
            <a>Home</a>
          </Link>
        </li>

        <li className="px-4">
          <Link to="/about">
            <a>About</a>
          </Link>
        </li>

        <li className="px-4">
          <Link to="/resume">
            <a>Resume</a>
          </Link>
        </li>
      </ul>
      <ul className="text-white flex flex-row justify-center text-center mt-6 max-md:flex-col">
        <li className="px-4 max-md:py-1">(925)-577-4951</li>
        <li className="px-4 max-md:py-1">elias_evan@yahoo.com</li>
      </ul>
    </footer>
  );
};

export default Footer;
