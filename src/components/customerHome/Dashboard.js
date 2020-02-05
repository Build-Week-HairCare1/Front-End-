import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

// components
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";
import Search from "./Search";
import AddReviewForm from "./AddReviewForm";
import EditReviewForm from "./EditReviewForm";
import Review from "./Review";

const Dashboard = () => {
  const history = useHistory();
  const [business, setBusiness] = useState();
  const [reviewToEdit, setReviewToEdit] = useState();

  // to set review to edit
  const selectedReview = obj => {
    setReviewToEdit(obj);
    history.push("/customer/home/editreview");
  };

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
          exact
          path="/customer/home/review/:reviewId"
          render={props => (
            <Review {...props} selectedReview={selectedReview} />
          )}
        />

        <Route
          path="/customer/home/search"
          render={props => (
            <Search {...props} businessToReview={businessToReview} />
          )}
        />
        <Route
          path="/customer/home/addreview"
          render={props => <AddReviewForm {...props} business={business} />}
        />

        <Route
          path="/customer/home/editreview"
          render={props => (
            <EditReviewForm {...props} reviewToEdit={reviewToEdit} />
          )}
        />
        <Route
          path="/customer/home/"
          render={props => (
            <DashboardContent {...props} selectedReview={selectedReview} />
          )}
        />
      </Switch>
    </div>
  );
};

export default Dashboard;
