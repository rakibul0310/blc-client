import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import userInfoReducer from "../slices/commonSlices/userInfoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userInfo: userInfoReducer,
  },
});
