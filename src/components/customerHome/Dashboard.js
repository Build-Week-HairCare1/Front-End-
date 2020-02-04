import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";
import Search from "./Search";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />

      <Switch>
        <Route path="/customer/home/" component={DashboardContent} />
        <Route path="/customer/home/search" component={Search} />
      </Switch>
    </div>
  );
};

export default Dashboard;
