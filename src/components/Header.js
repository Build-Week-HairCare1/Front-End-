import React from "react";
import { Link } from "react-router-dom";

// import getToken function to verify if user is logged in
import { getToken } from "../axiosWithAuth";

const Header = () => {
  const token = getToken();

  return (
    <header>
      <div className="logo">
        <h1>HairCare</h1>
      </div>

      {/* <nav>{token ? <NavLink>Logout</NavLink> : <NavLink>Log In</NavLink>}</nav> */}
      <nav className="main-nav">
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
};

export default Header;
