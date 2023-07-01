import axios from "axios";
import { authHeader, baseURL } from "./httpHelper";

const userInfo = async (data) => {
  const res = await axios.get(baseURL + "/api/user", authHeader);
  return res.data;
};

export const commonServices = {
  userInfo,
};
