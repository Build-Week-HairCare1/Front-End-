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
    photo_url: "",
    reviews: []
  }
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
