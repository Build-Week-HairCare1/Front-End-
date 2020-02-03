import axios from "axios";

export const getToken = () => {
  return localStorage.getItem("token");
};

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken()
    }
  });
};
