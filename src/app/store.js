import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
import customerReducer from "../feature/customers/customerSlice";
import trainReducer from "../feature/train/trainSlice";
import reservationReducer from "../feature/reservations/reservationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    train: trainReducer,
    reservation: reservationReducer
  },
});
