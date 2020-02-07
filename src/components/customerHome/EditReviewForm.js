import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

// rating from material ui
import { Rating } from "@material-ui/lab";

// action creator
import { editReview } from "../../actions";

// uploadcare widget
import { Widget } from "@uploadcare/react-widget";

const EditReviewForm = props => {
  const history = useHistory();
  const { reviewToEdit, editReview } = props;
  const initialFormState = {
    title: "",
    description: "",
    stars: 0,
    stylist: "",
    customer: "",
    photo_url: ""
  };
  const uploadCareKey = "ccb1d2ef9d857fc61c79";

  const [review, setReview] = useState(initialFormState);

  useEffect(() => {
    if (reviewToEdit) {
      setReview(reviewToEdit);
    } else {
      history.push("/customer/home");
    }
  }, []);

  // change handler
  const handleChange = e => {
    const { name, value } = e.target;

    setReview({
      ...review,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    editReview(review);
    props.history.push("/customer/home/");
  };

  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit} className="add-form">
        <div className="ind-field">
          <h2>Edit Review</h2>
        </div>
        <div className="ind-field">
          <label htmlFor="stylist">Name of Business</label>
          <input
            type="text"
            name="stylist"
            id="stylist"
            value={review.stylist}
            onChange={handleChange}
          />
        </div>

        <div className="ind-field">
          <label htmlFor="customer">Customer Name</label>
          <input
            type="text"
            name="customer"
            id="customer"
            value={review.customer}
            onChange={handleChange}
          />
        </div>

        <div className="ind-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={review.title}
            onChange={handleChange}
          />
        </div>

        <div className="ind-field">
          <label htmlFor="photo"></label>
          {/* <input
            className="image"
            type="file"
            name="photo_url"
            id="photo"
            value={review.photo_url}
            onChange={handleChange}
          /> */}
          <Widget
            publicKey={uploadCareKey}
            id="file"
            onChange={info => {
              setReview({
                ...review,
                photo_url: info.originalUrl
              });
            }}
            className="widget"
          />
        </div>

        <div className="ind-field">
          <label htmlFor="stars">Rating</label>
          <Rating
            name="stars"
            id="stars"
            className="stars-rating"
            value={parseInt(review.stars, 10)}
            onChange={handleChange}
            precision={0.5}
          />
        </div>

        <div className="ind-field">
          <label htmlFor="description">Review</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={review.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="add-btn">
          Edit Review
        </button>
      </form>
    </div>
  );
};

export default connect(null, { editReview })(EditReviewForm);
