import axios from "axios";
import { base_url } from "../../utils/base_url";

// Attaching the token
const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
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

const getTrains = async () => {
  console.log(getTokenFromLocalStorage.token);
  const response = await axios.get(`${base_url}train/`, config);
  return response.data;
};

const trainService = {
  getTrains,
};

export default trainService;
