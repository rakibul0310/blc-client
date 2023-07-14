import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import userInfoReducer from "../slices/commonSlices/userInfoSlice";
import coursesReducer from "../slices/commonSlices/coursesSlice";
import courseReducer from "../slices/commonSlices/courseSlice";
import paymentReducer from "../slices/paymentSlice";
import transactionReducer from "../slices/transactionSlice";
import myCoursesReducer from "../slices/myCoursesSlice";
import myCourseReducer from "../slices/myCourseSlice";
import supportReducer from "../slices/supportSlice";
import updateReducer from "../slices/updateSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userInfo: userInfoReducer,
    courses: coursesReducer,
    course: courseReducer,
    payment: paymentReducer,
    transaction: transactionReducer,
    myCourses: myCoursesReducer,
    myCourse: myCourseReducer,
    support: supportReducer,
    updates: updateReducer,
  },
});
