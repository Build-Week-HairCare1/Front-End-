// action types
import { ADD_REVIEW, FETCHING, EDIT_REVIEW, DELETE_REVIEW } from "../actions";

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
        id: 0,
        title: "test review",
        description: "test description",
        stars: 0,
        stylist: "test stylist",
        customer: "test customer",
        photo_url:
          "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1235&q=80"
      },

      {
        id: 1,
        title: "test review 2",
        description: "test description 2",
        stars: 3,
        stylist: "test stylist 2",
        customer: "test customer 2",
        photo_url:
          "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1235&q=80"
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

    case EDIT_REVIEW:
      return {
        ...state,
        data: {
          ...state.data,
          reviews: state.data.reviews.map(review => {
            if (review.id === action.payload.id) {
              return action.payload;
            } else {
              return review;
            }
          })
        },
        isFetching: false
      };

    case DELETE_REVIEW:
      return {
        ...state,
        data: {
          ...state.data,
          reviews: state.data.reviews.filter(review => {
            return review.id !== action.payload;
          })
        },
        isFetching: false
      };

    default:
      return state;
  }
};
