import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myCoursesServices } from "../../services/myCourseServices";

// login thunk action
export const createMyCourse = createAsyncThunk(
  "myCourses/createMyCourses",
  async (data, thunkApi) => {
    try {
      return await myCoursesServices.addMyCourse(data);
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

export const findMyCourse = createAsyncThunk(
  "myCourses/findMyCourses",
  async (thunkApi) => {
    try {
      return await myCoursesServices.getMyCourse();
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
  name: "myCourses",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  /*
     ? details: my courses reducer
  */
  extraReducers: (builder) => {
    builder.addCase(createMyCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createMyCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(createMyCourse.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
    /*
       ? details: get my courses reducer
    */
    builder.addCase(findMyCourse.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(findMyCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(findMyCourse.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default myCourseSlice.reducer;
