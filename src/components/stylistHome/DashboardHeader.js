import React from "react";
import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <nav className="dashboard-links">
        <NavLink to="/stylist/home/dashboard">Dashboard</NavLink>
        <NavLink to="/stylist/home/search">Search Nearby</NavLink>
      </nav>
    </header>
  );
};

export default DashboardHeader;
