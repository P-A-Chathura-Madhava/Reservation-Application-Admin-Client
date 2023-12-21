import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
import userReducer from "../feature/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
});
