import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authServices } from "../../services/authServices";

// login thunk action
export const userLogin = createAsyncThunk(
  "auth/login",
  async (data, thunkApi) => {
    try {
      return authServices.login(data);
    } catch (error) {
      const msg =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(msg);
    }
  }
);

// loggin thunk action
export const userRegister = createAsyncThunk(
  "auth/register",
  async (data, thunkApi) => {
    try {
      return authServices.register(data);
    } catch (error) {
      const msg =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(msg);
    }
  }
);

// Then, handle actions in auth reducers:
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    userInfo: {},
    error: null,
  },

  /*
     ? details: Login reducer
  */
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
      state.error = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.userInfo = {};
      state.error = action.payload;
    });
    /*
     ? details: Register reducer
    */
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userInfo = action.payload;
      state.error = null;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.userInfo = {};
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
