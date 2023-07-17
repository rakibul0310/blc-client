import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myDashboardServices } from "../../services/dashboardServices";

export const getLatestCourses = createAsyncThunk(
  "latestCourse/getLatestCourse",
  async (token, thunkApi) => {
    try {
      return await myDashboardServices.getLatestCoursesService(token);
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
export const latestCourseSlice = createSlice({
  name: "lastestCourse",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },

  extraReducers: (builder) => {
    /*
       ? details: get latest courses reducer
    */
    builder.addCase(getLatestCourses.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLatestCourses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getLatestCourses.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default latestCourseSlice.reducer;
