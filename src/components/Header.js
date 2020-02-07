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

      <nav className="main-nav">
        {token ? (
          <>
            <Link
              className="special"
              id="home"
              to="https://marketing-page-8ak0ddnz1.now.sh/"
            >
              Home
            </Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link
              className="special"
              id="home"
              to="https://marketing-page-8ak0ddnz1.now.sh/"
            >
              Home
            </Link>
            <Link
              id="team"
              to="https://marketing-page-8ak0ddnz1.now.sh/team.html"
            >
              Team
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
