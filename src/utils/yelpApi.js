import axios from "axios";

// yelp
export const YELP_KEY =
  "qgFLK44SdwzKgiAVDI3ysb6HQjKG-aQrd7hkH6Ja862G060E3Ovzc8uicDAjQjAZtH477ee4OWhgdzS8MAhy_Q3sPZAn3vN2ua5UZa1ZMuCkG6pHuQ7x3j5B8iY2XnYx";

export const yelpApi = () => {
  return axios.create({
    baseURL: `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3`,
    headers: {
      Authorization: `Bearer ${YELP_KEY}`
    }
  });
};
