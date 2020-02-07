import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

// components
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";
import Search from "./Search";
import AddReviewForm from "./AddReviewForm";

const StylistDashboard = () => {
  const history = useHistory();
  const [business, setBusiness] = useState();

  // to set business to add review for
  const businessToReview = obj => {
    setBusiness(obj);
    history.push("/customer/home/addreview");
  };

  return (
    <div className="dashboard-container">
      <DashboardHeader />

      <Switch>
        <Route
          path="/stylist/home/search"
          render={props => (
            <Search {...props} businessToReview={businessToReview} />
          )}
        />
        <Route
          exact
          path="/stylist/home/addreview"
          component={AddReviewForm}
        />
        <Route path="/stylist/home/" component={DashboardContent} />
      </Switch>
    </div>
  );
};

export default StylistDashboard;
