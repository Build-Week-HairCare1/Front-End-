import React from "react";
import { Link } from "react-router-dom";

// import getToken function to verify if user is logged in
import { getToken } from "../axiosWithAuth";

const Header = () => {
  const token = getToken();

  return (
    <header>
      <div className="logo">
        <img width="100%" height="100%" src='logo.png'/>
      </div>

      {/* <nav>{token ? <NavLink>Logout</NavLink> : <NavLink>Log In</NavLink>}</nav> */}
      <nav className="main-nav">
        <a href="" id='home'>Home</a>
        <a href="" id='team'>Team</a>
      </nav>
    </header>
  );
};

export default Header;
