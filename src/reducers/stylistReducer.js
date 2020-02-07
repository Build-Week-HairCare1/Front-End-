const initialState = {
  isFetching: false,
  data: {
    id: 0,
    first_name: "Jane",
    last_name: "Styist",
    email: "jane@stylist.com",
    phone: "715-666-0369",
    city: "San Francisco",
    state: "CA",
    specialty: "Hair Dying",
    salon: "Incredible Images Salon",
    years_experience: 10,
    photo_url: "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
    bio: "I am an awesome sylist with more than 10 years of experience",
    facebook_url: "",
    instagram_url: "",
    twitter_url: "",
    reviews: [
      {
        title: "test review",
        description: "test desc",
        stars: 4,
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
