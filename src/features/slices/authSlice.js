import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authServices } from "../../services/authServices";

// login thunk action
export const userLogin = createAsyncThunk(
  "auth/login",
  async (data, thunkApi) => {
    try {
      return await authServices.login(data);
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

// loggin thunk action
export const userRegister = createAsyncThunk(
  "auth/register",
  async (data, thunkApi) => {
    try {
      return await authServices.register(data);
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
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    data: {},
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
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
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
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
