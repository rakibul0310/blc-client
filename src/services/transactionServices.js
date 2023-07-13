import axios from "axios";
import { authHeader, baseURL } from "./httpHelper";

const makeTransaction = async (data) => {
  const res = await axios.post(
    baseURL + "/secure/api/transaction",
    data,
    authHeader
  );
  return res.data;
};
const getTransaction = async () => {
  const res = await axios.get(
    baseURL + "/secure/api/my-transaction",
    authHeader
  );
  return res.data;
};

export const transactionServices = {
  makeTransaction,
  getTransaction,
};
