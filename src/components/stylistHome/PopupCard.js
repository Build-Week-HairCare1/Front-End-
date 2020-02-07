import React from "react";

// material ui rating
import { Rating } from "@material-ui/lab";

const PopupCard = props => {
  const { location, businessToReview, setSelected } = props;

  return (
    <div className="popup-container">
      <figure className="popup-image">
        <img src={location.image_url} alt={location.name} />
      </figure>
      <div className="info">
        <h2 className="popup-title">{location.name}</h2>
        <p className="popup-desc">
          Address: {location.location.address1}, {location.location.city},{" "}
          {location.location.state}
        </p>
        <p className="popup-desc">Phone: {location.phone}</p>
        <p className="popup-desc">
          Avg. Rating:{" "}
          <Rating value={location.rating} readOnly className="stars" />
        </p>
      </div>

      <div className="btn-container">
        <button className="add-btn" onClick={() => businessToReview(location)}>
          Add Review
        </button>
        <button className="close-popup" onClick={() => setSelected(null)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupCard;
