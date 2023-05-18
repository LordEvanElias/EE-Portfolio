import React from "react";
import NavLinks from "./NavLinks";
import classes from "./Nav.module.css";

const NavBar = () => {
  return (
    <>
      <div className={classes.headernav}>
        <NavLinks />
      </div>
    </>
  );
};

export default NavBar;
