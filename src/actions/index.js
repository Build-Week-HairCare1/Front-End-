import axios from "axios";
import { ListGroupItemHeading } from "reactstrap";

export const FETCHING = "FETCHING";
export const ADD_REVIEW = "ADD_REVIEW";
export const EDIT_REVIEW = "EDIT_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

export const addReview = reviewObj => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .post(`https://haircare1backend.herokuapp.com/api/reviews/`, reviewObj)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_REVIEW, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const editReview = reviewObj => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .put(
      `https://haircare1backend.herokuapp.com/api/reviews/${reviewObj.id}`,
      reviewObj
    )
    .then(res => {
      console.log(res);
      dispatch({ type: EDIT_REVIEW, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const deleteReview = id => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .delete(`https://haircare1backend.herokuapp.com/api/reviews/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_REVIEW, payload: res.data });
    })
    .catch(err => console.log(err));
};
