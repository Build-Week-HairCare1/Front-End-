import React from "react";
import { Link } from "react-router-dom";

// import getToken function to verify if user is logged in
import { getToken } from "../axiosWithAuth";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <span id="brand">Hair+Care</span>
      </div>

      <nav className="main-nav">
        {getToken() ? (
          <>
            <a
              className="special"
              id="home"
              href="https://marketing-page-8ak0ddnz1.now.sh/"
            >
              Home
            </a>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <a
              className="special"
              id="home"
              href="https://marketing-page-8ak0ddnz1.now.sh/"
            >
              Home
            </a>
            <a
              id="team"
              href="https://marketing-page-8ak0ddnz1.now.sh/team.html"
            >
              Team
            </a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
