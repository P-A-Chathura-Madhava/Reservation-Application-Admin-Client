import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import trainService from "./trainService";

export const getTrains = createAsyncThunk(
  "train/get-trains",
  async (thunkAPI) => {
    try {
      return await trainService.getTrains();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createTrain = createAsyncThunk(
  "train/create-train",
  async (trainData, thunkAPI) => {
    try {
      return await trainService.createTrain(trainData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)
const initialState = {
  trains: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const trainSlice = createSlice({
  name: "trains",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrains.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrains.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.trains = action.payload;
      })
      .addCase(getTrains.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createTrain.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTrain.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdTrain = action.payload;
      })
      .addCase(createTrain.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default trainSlice.reducer;