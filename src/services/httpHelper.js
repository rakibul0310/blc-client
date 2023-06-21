export const baseURL = "http://localhost:1000";

const token = JSON.parse(localStorage.getItem("blcToken"));

export const authHeader = {
  headers: {
    authorization: token,
  },
};
