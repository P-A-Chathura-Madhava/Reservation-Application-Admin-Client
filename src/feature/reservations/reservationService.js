import axios from "axios";
import { base_url } from "../../utils/base_url";

const getReservations = async () => {
  const response = await axios.get(`${base_url}user/get-all-reservations`);
  return response.data;
};

const reservationService = {
  getReservations,
};

export default reservationService;