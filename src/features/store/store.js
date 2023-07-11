import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import userInfoReducer from "../slices/commonSlices/userInfoSlice";
import coursesReducer from "../slices/commonSlices/coursesSlice";
import courseReducer from "../slices/commonSlices/courseSlice";
import paymentReducer from "../slices/paymentSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userInfo: userInfoReducer,
    courses: coursesReducer,
    course: courseReducer,
    payment: paymentReducer,
  },
});
