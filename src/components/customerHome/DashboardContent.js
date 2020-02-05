import React from "react";
import { connect } from "react-redux";

// components
import ReviewCard from "./ReviewCard";

const DashboardContent = props => {
  const { data, selectedReview } = props;

  return (
    <div className="dashboard-content">
      {data.reviews.length === 0 ? (
        <h2 className="no-reviews">No reviews</h2>
      ) : (
        data.reviews.map(item => {
          return (
            <ReviewCard
              item={item}
              key={item.id}
              selectedReview={selectedReview}
            />
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.customerReducer.data
  };
};

export default connect(mapStateToProps, {})(DashboardContent);
