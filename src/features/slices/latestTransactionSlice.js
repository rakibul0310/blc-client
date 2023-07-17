import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myDashboardServices } from "../../services/dashboardServices";

export const getLatestTransactions = createAsyncThunk(
  "latestTransactions/getLatestTransactions",
  async (token, thunkApi) => {
    try {
      return await myDashboardServices.getLatestTransactionsService(token);
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
export const latestTransactionSlice = createSlice({
  name: "lastestTransactions",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },

  extraReducers: (builder) => {
    /*
       ? details: get latest courses reducer
    */
    builder.addCase(getLatestTransactions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLatestTransactions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getLatestTransactions.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default latestTransactionSlice.reducer;
