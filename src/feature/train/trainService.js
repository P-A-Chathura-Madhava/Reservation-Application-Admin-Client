import axios from "axios";
import { base_url } from "../../utils/base_url";

const getTrains = async () => {
  const response = await axios.get(`${base_url}train/`);
  return response.data;
};

const trainService = {
  getTrains,
};

export default trainService;