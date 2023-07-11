export const baseURL = "http://localhost:1000";

export const authHeader = (token) => {
  return {
    headers: {
      authorization: token,
    },
  };
};
