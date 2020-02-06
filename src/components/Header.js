import React from "react";
import { Link } from "react-router-dom";

// import getToken function to verify if user is logged in
import { getToken } from "../axiosWithAuth";

const Header = () => {
  const token = getToken();

  return (
    <header>
      <div className="logo">
        <span id="brand">Hair+Care</span>
      </div>

      {/* <nav>{token ? <NavLink>Logout</NavLink> : <NavLink>Log In</NavLink>}</nav> */}
      <nav className="main-nav">
        <a href="" id="home" className="special">
          Home
        </a>
        <a href="" id="team">
          Team
        </a>
      </nav>
    </header>
  );
};

export default Header;
