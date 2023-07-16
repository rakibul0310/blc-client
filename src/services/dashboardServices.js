import axios from "axios";
import { authHeader, baseURL } from "./httpHelper";

const getLearningTimeService = async () => {
  const res = await axios.get(
    baseURL + "/secure/api/learning-time",
    authHeader
  );
  return res.data;
};

const getTotalTaskService = async () => {
  const res = await axios.get(baseURL + "/secure/api/total-task", authHeader);
  return res.data;
};

const getLatestCoursesService = async () => {
  const res = await axios.get(
    baseURL + "/secure/api/latest-course",
    authHeader
  );
  return res.data;
};
const getUpcomingTaskService = async () => {
  const res = await axios.get(
    baseURL + "/secure/api/upcoming-task",
    authHeader
  );
  return res.data;
};
const getLatestTransactionsService = async () => {
  const res = await axios.get(
    baseURL + "/secure/api/latest-transactions",
    authHeader
  );
  return res.data;
};

export const myDashboardServices = {
  getLatestCoursesService,
  getLatestTransactionsService,
  getLearningTimeService,
  getTotalTaskService,
  getUpcomingTaskService,
};
