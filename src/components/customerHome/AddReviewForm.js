import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// action creator
import { addReview } from "../../actions";

// rating from material ui
import { Rating } from "@material-ui/lab";

const AddReviewForm = props => {
  const { business, data, addReview } = props;

  let initialFormState = {
    title: "",
    description: "",
    stars: 0,
    stylist: "",
    customer: "",
    photo_url: ""
  };

  const [review, setReview] = useState(initialFormState);

  useEffect(() => {
    if (business) {
      setReview({
        ...initialFormState,
        stylist: business.name,
        customer: `${data.first_name} ${data.last_name}`
      });
    } else {
      props.history.push("/customer/home/search");
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
    console.log(review);
    // addReview action will be here grabbing review object
    props.history.push("/customer/home/");
  };

  return (
    <div className="add-form-container">
      <form onSubmit={handleSubmit} className="add-form">
        <div className="ind-field">
          <h2>Add Review</h2>
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
          <input
            className="image"
            type="file"
            name="photo_url"
            id="photo"
            value={review.photo_url}
            onChange={handleChange}
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
          Add Review
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.customerReducer.data
  };
};

export default connect(mapStateToProps, { addReview })(AddReviewForm);
