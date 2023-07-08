import axios from "axios";
import { baseURL } from "./httpHelper";

const login = async (data) => {
  const res = await axios.post(baseURL + "/public/api/login", data);
  console.log("here is resposnse", res);
  if (res?.data?.user?.token) {
    const existingUser = localStorage.getItem("blcToken");
    if (JSON.parse(existingUser)) {
      localStorage.removeItem("blcToken");
    }
    localStorage.setItem("blcToken", JSON.stringify(res?.data?.user?.token));
  }
  return res.data;
};

const register = async (data) => {
  const res = await axios.post(baseURL + "/public/api/register", data);
  if (res?.data?.user?.token) {
    const existingUser = localStorage.getItem("blcToken");
    if (JSON.parse(existingUser)) {
      localStorage.removeItem("blcToken");
    }
    localStorage.setItem("blcToken", JSON.stringify(res?.data?.user?.token));
  }
  return res.data;
};

export const authServices = {
  login,
  register,
};
