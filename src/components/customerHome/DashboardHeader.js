import React from "react";
import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <nav className="dashboard-links">
        <NavLink to="/customer/home/dashboard">Dashboard</NavLink>
        <NavLink to="/customer/home/search">Search Nearby</NavLink>
        <NavLink to="/customer/home/add-images">Add Images</NavLink>
      </nav>
    </header>
  );
};

export default DashboardHeader;
