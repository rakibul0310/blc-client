import axios from "axios";
import { authHeader, baseURL } from "./httpHelper";

const CreateUpdateService = async (data) => {
  const res = await axios.post(
    baseURL + "/private/api/updates",
    data,
    authHeader
  );
  return res.data;
};
const getUpdatesService = async () => {
  const res = await axios.get(baseURL + "/api/updates", authHeader);
  return res.data;
};

export const updateServices = {
  CreateUpdateService,
  getUpdatesService,
};
