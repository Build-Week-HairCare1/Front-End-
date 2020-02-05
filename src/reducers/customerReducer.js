// action types
import { ADD_REVIEW, FETCHING } from "../actions";

const initialState = {
  isFetching: false,
  data: {
    id: 0,
    first_name: "first",
    last_name: "last",
    email: "john@doe.com",
    phone: "000-000-000",
    gender: "Male",
    city: "San Francisco",
    state: "CA",
    reviews: [
      {
        title: "test review",
        description: "test description",
        stars: 0,
        stylist: "test stylist",
        customer: "test customer",
        photo_url: ""
      }
    ]
  }
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true
      };

    case ADD_REVIEW:
      return {
        ...state,
        data: {
          ...state.data,
          reviews: [...state.data.reviews, action.payload]
        },
        isFetching: false
      };

    default:
      return state;
  }
};
