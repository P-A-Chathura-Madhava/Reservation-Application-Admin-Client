import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reservationService from "./reservationService";

export const getReservations = createAsyncThunk(
  "reservation/get-reservations",
  async (thunkAPI) => {
    try {
      return await reservationService.getReservations();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  reservations: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.reservations = action.payload;
      })
      .addCase(getReservations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default reservationSlice.reducer;