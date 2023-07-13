import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { transactionServices } from "../../services/transactionServices";

export const addTransaction = createAsyncThunk(
  "transaction/makeTransaction",
  async (data, thunkApi) => {
    try {
      return await transactionServices.makeTransaction(data);
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
export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  /*
     ? details: transaction reducer
  */
  extraReducers: (builder) => {
    builder.addCase(addTransaction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addTransaction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(addTransaction.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default transactionSlice.reducer;
