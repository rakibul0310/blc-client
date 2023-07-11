import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonServices } from "../../../services/commonServices";

// user data thunk action
export const coursesData = createAsyncThunk(
  "courses/coursesData",
  async (thunkApi) => {
    try {
      return await commonServices.getCourses();
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
export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  /*
     ? details: info reducer
  */
  extraReducers: (builder) => {
    builder.addCase(coursesData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(coursesData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(coursesData.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default coursesSlice.reducer;
