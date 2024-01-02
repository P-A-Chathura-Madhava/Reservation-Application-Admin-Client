import axios from "axios";
import { base_url } from "../../utils/base_url";

// Attaching the token
const getTokenFromLocalStorage = localStorage.getItem("admin")
  ? JSON.parse(localStorage.getItem("admin"))
  : null;

const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};

// Attaching the token ends here

const getUsers = async () => {
  const response = await axios.get(`${base_url}customer/all-customers`);
  // console.log(response.data);
  return response.data;
};

const deleteUser = async (id) => {
  const response = await axios.delete(`${base_url}user/${id}`, config);
  return response.data;
}

const customerService = {
  getUsers,
  deleteUser
};

export default customerService;