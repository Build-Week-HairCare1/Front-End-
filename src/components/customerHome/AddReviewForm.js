import React, { useState } from "react";

// rating from material ui
import { Rating } from "@material-ui/lab";

const AddReviewForm = () => {
  const initialFormState = {
    title: "",
    description: "",
    stars: 0,
    stylist: "",
    customer: "",
    photo_url: ""
  };

  const [review, setReview] = useState(initialFormState);

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
  };

  return (
    <form onSubmit={handleSubmit}>
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
          value={parseInt(review.stars, 10)}
          onChange={handleChange}
          precision={0.5}
        />
      </div>

      <div className="ind-field">
        <label htmlFor="description">Review</label>
        <input
          type="text"
          name="description"
          id="description"
          value={review.description}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddReviewForm;
