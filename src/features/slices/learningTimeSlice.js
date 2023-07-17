import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myDashboardServices } from "../../services/dashboardServices";

export const getLearningTime = createAsyncThunk(
  "learningTime/getLearningTime",
  async (token, thunkApi) => {
    try {
      return await myDashboardServices.getLearningTimeService(token);
    } catch (error) {
      let msg = "";
      if (error.response.data.message) {
        msg = error.response.data.message;
      } else {
        msg = error.message;
      }

      return thunkApi.rejectWithValue(msg);
    }
  }
);

// Then, handle actions in auth reducers:
export const learningTimeSlice = createSlice({
  name: "learningTime",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  extraReducers: (builder) => {
    /*
       ? details: get latest courses reducer
    */
    builder.addCase(getLearningTime.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLearningTime.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getLearningTime.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default learningTimeSlice.reducer;
