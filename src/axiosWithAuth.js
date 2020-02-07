import axios from "axios";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://basic-auth-vh.herokuapp.com",
    headers: {
      authorization: getToken()
    }
  });
};
