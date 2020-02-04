const initialState = {
  isFetching: false,
  data: {
    id: 0,
    first_name: "first stylist",
    last_name: "last stylist",
    email: "jane@doe.com",
    phone: "000-000-000",
    city: "San Francisco",
    state: "CA",
    specialty: "test specialty",
    salon: "test salon",
    years_experience: 0,
    photo_url: "",
    bio: "test bio",
    facebook_url: "",
    instagram_url: "",
    twitter_url: "",
    reviews: [
      {
        title: "test review",
        description: "test desc",
        stars: 0,
        stylist: "test stylist",
        customer: "test customer",
        photo_url: ""
      }
    ]
  }
};

export const stylistReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
