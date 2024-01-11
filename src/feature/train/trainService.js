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

const getTrains = async () => {
  // console.log("get trains");
  // console.log(getTokenFromLocalStorage.token);
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}train/alltrains`);
  // console.log(response);
  return response.data;
};

const createTrain = async (train) => {
  // console.log("Working", train);
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}train/`, train, config);
  return response.data;
}

const updateTrain = async (newTrain) => {
  // console.log("Working", newTrain);
  const response = await axios.put(`${base_url}train/${newTrain.id}`, newTrain, config);
  return response.data;
}

const deleteTrain = async (id) => {
  // console.log("Working", id);
  const response = await axios.delete(`${base_url}train/${id}`, config);
  return response.data;
}

const trainService = {
  getTrains,
  createTrain,
  updateTrain,
  deleteTrain
};

export default trainService;
