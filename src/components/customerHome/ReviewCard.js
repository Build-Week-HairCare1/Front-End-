import React from "react";
import { Link } from "react-router-dom";

const ReviewCard = props => {
  const { item } = props;

  return (
    <div className="review-card" key={item.id}>
      <div className="card-info">
        <figure>
          <img src={item.photo_url} alt={item.title} />
        </figure>

        <div className="info-container">
          <Link to={`/customer/home/review/${item.id}`}>
            <h2>{item.title}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
