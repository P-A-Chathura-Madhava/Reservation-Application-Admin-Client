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
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}customer/all-customers`);
  // console.log(response.data);
  return response.data;
};

const deleteUser = async (id) => {
  // console.log(id);
  const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}customer/delete-a-customer/${id}`, config);
  return response.data;
}

const customerService = {
  getUsers,
  deleteUser
};

export default customerService;