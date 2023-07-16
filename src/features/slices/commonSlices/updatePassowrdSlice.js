import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commonServices } from "../../../services/commonServices";

// user data thunk action
export const updateUserPassword = createAsyncThunk(
  "updatePassword/updateUserPassword",
  async (data, thunkApi) => {
    try {
      return await commonServices.updatePasswordService(data);
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
export const updatePasswordSlice = createSlice({
  name: "updatePassword",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  /*
     ? details: info reducer
  */
  extraReducers: (builder) => {
    builder.addCase(updateUserPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUserPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(updateUserPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default updatePasswordSlice.reducer;
