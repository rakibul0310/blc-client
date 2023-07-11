import axios from "axios";
import { authHeader, baseURL } from "./httpHelper";

const makePaymentIntent = async (service) => {
  const res = await axios.post(
    baseURL + "/secure/api/payment-intent",
    service,
    authHeader
  );
  return res.data;
};

export const paymentServices = {
  makePaymentIntent,
};
