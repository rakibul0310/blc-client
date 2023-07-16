import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonServices } from "../../../services/commonServices";

// user data thunk action
export const userData = createAsyncThunk(
  "userInfo/userData",
  async (token, thunkApi) => {
    try {
      const data = JSON.parse(localStorage.getItem("blcToken"));
      return await commonServices.userInfo(token ? token : data);
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

export const updateUserData = createAsyncThunk(
  "userInfo/updateUserData",
  async (data, thunkApi) => {
    try {
      return await commonServices.updateUserInfoService(data);
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
export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  /*
     ? details: info reducer
  */
  extraReducers: (builder) => {
    builder.addCase(userData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(userData.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
    builder.addCase(updateUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(updateUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default userInfoSlice.reducer;
