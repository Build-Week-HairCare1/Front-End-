import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>HairCare</h1>

      <nav>
        <NavLink>Logout</NavLink>
      </nav>
    </header>
  );
};

export default Header;
