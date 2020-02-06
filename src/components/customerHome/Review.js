import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { Rating } from "@material-ui/lab";

import { deleteReview } from "../../actions";

const Review = props => {
  const { reviewId } = useParams();
  const { data, selectedReview, deleteReview } = props;

  const [review, setReview] = useState({});
  console.log(review);

  useEffect(() => {
    //   make axios call to fetch data when ready
    const newRev = data.reviews.filter(
      obj => obj.id === parseInt(reviewId, 10)
    );
    setReview(newRev[0]);
  }, []);

  return (
    <div className="review-container">
      <div className="row-container">
        <figure>
          <img src={review.photo_url} alt={review.title} />
        </figure>

        <div className="review-details">
          <h2>Title: {review.title}</h2>
          <p>Description: {review.description}</p>
          <p>
            Rating: <Rating value={parseInt(review.stars, 10)} readOnly />
          </p>
        </div>
      </div>

      <div className="btn-container">
        <button onClick={() => selectedReview(review)}>Edit</button>
        <button onClick={() => deleteReview(review.id)}>Delete</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.customerReducer.data
  };
};

export default connect(mapStateToProps, { deleteReview })(Review);
