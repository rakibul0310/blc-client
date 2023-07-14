import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateServices } from "../../services/updateServices";

export const createUpdate = createAsyncThunk(
  "updates/createUpdate",
  async (data, thunkApi) => {
    try {
      return await updateServices.CreateUpdateService(data);
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

export const getUpdates = createAsyncThunk(
  "update/getUpdates",
  async (thunkApi) => {
    try {
      return await updateServices.getUpdatesService();
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
export const updateSlice = createSlice({
  name: "updates",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  /*
     ? details: updates reducer
  */
  extraReducers: (builder) => {
    builder.addCase(createUpdate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUpdate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(createUpdate.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });

    builder.addCase(getUpdates.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUpdates.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getUpdates.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default updateSlice.reducer;
