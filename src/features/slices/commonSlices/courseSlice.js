import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonServices } from "../../../services/commonServices";

// user data thunk action
export const courseData = createAsyncThunk(
  "courses/courseData",
  async (id, thunkApi) => {
    try {
      return await commonServices.getCourseById(id);
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

// Then, handle actions in user information reducers:
export const courseSlice = createSlice({
  name: "course",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  /*
       ? details: info reducer
    */
  extraReducers: (builder) => {
    builder.addCase(courseData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(courseData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(courseData.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default courseSlice.reducer;
