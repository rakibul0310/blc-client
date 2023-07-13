import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myCoursesServices } from "../../services/myCourseServices";

export const findMyCourseByid = createAsyncThunk(
  "myCourse/findMyCourseById",
  async (id, thunkApi) => {
    try {
      return await myCoursesServices.getMyCourseById(id);
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
export const myCourseSlice = createSlice({
  name: "myCourse",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  extraReducers: (builder) => {
    /*
       ? details: get my courses reducer
    */
    builder.addCase(findMyCourseByid.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(findMyCourseByid.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(findMyCourseByid.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default myCourseSlice.reducer;
