import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myDashboardServices } from "../../services/dashboardServices";

export const getTotalTask = createAsyncThunk(
  "totalTask/getTotalTask",
  async (token, thunkApi) => {
    try {
      return await myDashboardServices.getTotalTaskService(token);
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
export const totalTaskSlice = createSlice({
  name: "titalTask",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  extraReducers: (builder) => {
    /*
       ? details: get latest courses reducer
    */
    builder.addCase(getTotalTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTotalTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getTotalTask.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default totalTaskSlice.reducer;
