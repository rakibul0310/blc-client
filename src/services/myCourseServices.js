import axios from "axios";
import { authHeader, baseURL } from "./httpHelper";

const addMyCourse = async (data) => {
  const res = await axios.post(
    baseURL + "/secure/api/my-courses",
    data,
    authHeader
  );
  return res.data;
};

const getMyCourse = async () => {
  const res = await axios.get(baseURL + "/secure/api/my-courses", authHeader);
  return res.data;
};

export const myCoursesServices = {
  addMyCourse,
  getMyCourse,
};
