import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supportServices } from "../../services/supportServices";

export const addSupportTicket = createAsyncThunk(
  "support/makeSupportTicket",
  async (data, thunkApi) => {
    try {
      return await supportServices.CreateSupportTicket(data);
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

export const getSupportHistory = createAsyncThunk(
  "support/getSupportHistory",
  async (thunkApi) => {
    try {
      return await supportServices.getSupportTicket();
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

export const getAllSupportHistory = createAsyncThunk(
  "support/getAllSupportHistory",
  async (thunkApi) => {
    try {
      return await supportServices.getAllSupportTicket();
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
export const supportSlice = createSlice({
  name: "support",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  /*
     ? details: support reducer
  */
  extraReducers: (builder) => {
    builder.addCase(addSupportTicket.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addSupportTicket.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(addSupportTicket.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });

    builder.addCase(getSupportHistory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSupportHistory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getSupportHistory.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });

    builder.addCase(getAllSupportHistory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllSupportHistory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getAllSupportHistory.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default supportSlice.reducer;
