import React from "react";
import { connect } from "react-redux";

const DashboardContent = props => {
  const { data } = props;

  return (
    <div className="dashboard-content">
      {data.reviews.length === 0 ? (
        <h2 className="no-reviews">No reviews</h2>
      ) : (
        data.reviews.map(item => {
          return (
            <div className="review-card" key={item.id}>
              <div className="card-info">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1235&q=80"
                    alt=""
                  />
                </figure>

                <div className="info-container">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p>{item.stars}</p>
                </div>
              </div>
            </div>
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
