import axios from "axios";
import { authHeader, baseURL } from "./httpHelper";

const CreateSupportTicket = async (data) => {
  const res = await axios.post(
    baseURL + "/secure/api/support-ticket",
    data,
    authHeader
  );
  return res.data;
};
const getSupportTicket = async () => {
  const res = await axios.get(
    baseURL + "/secure/api/support-ticket",
    authHeader
  );
  return res.data;
};

const getAllSupportTicket = async () => {
  const res = await axios.get(
    baseURL + "/secure/api/all-support-ticket",
    authHeader
  );
  return res.data;
};

export const supportServices = {
  CreateSupportTicket,
  getSupportTicket,
  getAllSupportTicket,
};
