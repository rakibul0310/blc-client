import axios from "axios";
import baseURL from "./httpHelper";

const login = async (data) => {
  const res = await axios.post(baseURL + "/public/api/login", data);
  if (res.data) {
    localStorage.setItem("blcUser", JSON.stringify(res.data));
  }
  return res.data;
};

const register = async (data) => {
  const res = await axios.post(baseURL + "/public/api/register", data);
  if (res.data) {
    const existingUser = localStorage.getItem("blcUser");
    if (JSON.parse(existingUser)) {
      localStorage.removeItem("blcUser");
    }
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

export const authServices = {
  login,
  register,
};
