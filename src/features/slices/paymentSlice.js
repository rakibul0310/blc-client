import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { paymentServices } from "../../services/paymentServices";

export const makePayment = createAsyncThunk(
  "payment/makePayment",
  async (service, thunkApi) => {
    try {
      return await paymentServices.makePaymentIntent(service);
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
export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  /*
     ? details: payment reducer
  */
  extraReducers: (builder) => {
    builder.addCase(makePayment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(makePayment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(makePayment.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default paymentSlice.reducer;
