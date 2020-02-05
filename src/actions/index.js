import axios from "axios";

export const FETCHING = "FETCHING";
export const ADD_REVIEW = "ADD_REVIEW";

export const addReview = reviewObj => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .post("api", reviewObj)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_REVIEW, payload: res.data });
    })
    .catch(err => console.log(err));
};
