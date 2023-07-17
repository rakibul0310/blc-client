import axios from "axios";
import { authHeader, baseURL } from "./httpHelper";

const getLearningTimeService = async (token) => {
  const res = await axios.get(baseURL + "/secure/api/learning-time", {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const getTotalTaskService = async (token) => {
  const res = await axios.get(baseURL + "/secure/api/total-task", {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

const getLatestCoursesService = async (token) => {
  const res = await axios.get(baseURL + "/secure/api/latest-course", {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};
const getUpcomingTaskService = async (token) => {
  const res = await axios.get(baseURL + "/secure/api/upcoming-task", {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};
const getLatestTransactionsService = async (token) => {
  const res = await axios.get(baseURL + "/secure/api/latest-transactions", {
    headers: {
      authorization: token,
    },
  });
  return res.data;
};

export const myDashboardServices = {
  getLatestCoursesService,
  getLatestTransactionsService,
  getLearningTimeService,
  getTotalTaskService,
  getUpcomingTaskService,
};
