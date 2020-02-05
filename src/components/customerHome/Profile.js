import React from "react";
import { connect } from "react-redux";

const Profile = props => {
  const { data } = props;

  return (
    <div className="profile-container">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"
          alt="#"
        />
      </figure>

      <div className="info">
        <h2 className="name">
          {data.first_name} {data.last_name}
        </h2>
        <h2 className="location">
          {data.city}, {data.state}
        </h2>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.customerReducer.data
  };
};

export default connect(mapStateToProps, {})(Profile);
