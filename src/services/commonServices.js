import axios from "axios";
import { authHeader, baseURL } from "./httpHelper";

const userInfo = async (token) => {
  const res = await axios.get(baseURL + "/api/user", {
    headers: {
      authorization: token,
    },
  });
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

const updateUserInfoService = async (data) => {
  const res = await axios.post(baseURL + "/api/user", data, authHeader);
  return res.data;
};

const updatePasswordService = async (data) => {
  const res = await axios.post(
    baseURL + "/api/change-password",
    data,
    authHeader
  );
  return res.data;
};

export const commonServices = {
  userInfo,
  getCourses,
  getCourseById,
  updateUserInfoService,
  updatePasswordService,
};
