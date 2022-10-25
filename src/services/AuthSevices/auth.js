import axios from "axios";

const AUTH_BASE_URL = process.env.REACT_APP_NOTES_APP_BASE_URL;
export const loginService = async (email, password) => {
  console.log(email, password);
  return axios.post(`${AUTH_BASE_URL}/signin`, {
    email,
    password,
  });
};

export const signUpSevice = async (name, email, password) => {
  return axios.post(`${AUTH_BASE_URL}/signup`, {
    name,
    email,
    password,
  });
};
