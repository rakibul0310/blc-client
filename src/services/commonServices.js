import axios from "axios";
import { authHeader, baseURL } from "./httpHelper";

const userInfo = async () => {
  const res = await axios.get(baseURL + "/api/user", authHeader);
  return res.data;
};

const getCourses = async () => {
  const res = await axios.get(baseURL + "/public/api/courses", authHeader);
  return res.data;
};
const getCourseById = async (id) => {
  const res = await axios.get(baseURL + "/public/api/course/" + id, authHeader);
  return res.data;
};

export const commonServices = {
  userInfo,
  getCourses,
  getCourseById,
};
