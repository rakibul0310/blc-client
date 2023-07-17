import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myDashboardServices } from "../../services/dashboardServices";

export const getUpcomingTask = createAsyncThunk(
  "upcomingTask/getUpcomingTask",
  async (token, thunkApi) => {
    try {
      return await myDashboardServices.getUpcomingTaskService(token);
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
export const upcomingTaskSlice = createSlice({
  name: "upcomingTask",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },

  extraReducers: (builder) => {
    /*
       ? details: get latest courses reducer
    */
    builder.addCase(getUpcomingTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUpcomingTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getUpcomingTask.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default upcomingTaskSlice.reducer;
