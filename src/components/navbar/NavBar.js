import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">GOMIS-BOOKING</span>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
