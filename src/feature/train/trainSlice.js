import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
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
);

export const updateTrain = createAsyncThunk(
  "train/update-train",
  async (trainData, thunkAPI) => {
    try {
      return await trainService.updateTrain(trainData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteATrain = createAsyncThunk(
  "train/delete-train",
  async (id, thunkAPI) => {
    // console.log(id);
    try {
      return await trainService.deleteTrain(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// to stop getting train added message again and again
export const resetState = createAction("Reset_all");

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
      })
      .addCase(updateTrain.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTrain.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.updatedTrain = action.payload;
      })
      .addCase(updateTrain.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteATrain.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteATrain.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.deletedTrain = action.payload;
      })
      .addCase(deleteATrain.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});
export default trainSlice.reducer;
