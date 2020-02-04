import React from "react";

// components
import Profile from "./customerHome/Profile";
import Dashboard from "./customerHome/Dashboard";

// styles
import { CustomerStyles } from "./customerHome/CustomerStyles";

function CustomerHome() {
  return (
    <div className="customer-home">
      <CustomerStyles />
      <Profile />
      <Dashboard />
    </div>
  );
}

export default CustomerHome;
