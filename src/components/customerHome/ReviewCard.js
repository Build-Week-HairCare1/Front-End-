import React from "react";
import { Link } from "react-router-dom";

// rating

const ReviewCard = props => {
  const { item } = props;

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
          <Link to={`/customer/home/review/${item.id}`}>
            <h2>{item.title}</h2>
          </Link>

          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
