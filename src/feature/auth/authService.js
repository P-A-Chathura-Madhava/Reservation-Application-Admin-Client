import axios from "axios";
import { base_url } from "../../utils/base_url";

const getTokenFromLocalStorage = localStorage.getItem("admin")
  ? JSON.parse(localStorage.getItem("admin"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

const register = async (userData) => {
  // console.log(userData);
  const response = await axios.post(`${base_url}user/register`, userData);
  if (response.data) {
      localStorage.setItem("admin", JSON.stringify(response.data));
    return response.data;
  }
};

const login = async (user) => {
  // console.log(user);
  const response = await axios.post(`${base_url}user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("admin", JSON.stringify(response.data));
    // console.log(response.data);
  }
  return response.data;
};

const authService = {
  login,
  register
};

export default authService;