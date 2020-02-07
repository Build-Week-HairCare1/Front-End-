import React from "react";
import { connect } from "react-redux";

const StylistProfile = props => {
  const { data } = props;

  return (
    <div className="profile-container">
      <h2 className="name">
          Welcome, {data.first_name}
        </h2>
      <figure>
        <img
          src= {data.photo_url}
          alt="#"
        />
      </figure>

      <div className="info">
        <h2 className="name">
          {data.first_name} {data.last_name}
        </h2>
        <h3 className="Salon">
          {data.salon}
        </h3>
        <h3 className="email">
          {data.email}
        </h3>
        <h3 className="phone">
          {data.phone}
        </h3>
        <h3 className="Experience">
          {data.years_experience}
        </h3>
        <h2 className="Bio">
          {data.bio}
        </h2>
        <h3 className="location">
          {data.city}, {data.state}
        </h3>
        <h3 className="location">
          {data.city}, {data.state}
        </h3>
        <h3 className="location">
          {data.city}, {data.state}
        </h3>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.stylistReducer.data
  };
};

export default connect(mapStateToProps, {})(StylistProfile);
