import axios from "axios";

export const isAuthenticated = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8001/api/authenticated",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.error("Auth check failed:", err);
    return false;
  }
};

export const handleLogin = async (payload) => {
  try {
    const response = await axios.post(
      "http://localhost:8001/api/auth-with-password",
      payload,
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const handleSignup = async (payload) => {
  try {
    const response = await axios.post(
      "http://localhost:8001/api/register",
      payload
    );
    return response.data;
  } catch (err) {
    console.log("err", err.response ? err.response.data : err.message);
    throw err;
  }
};

export const handleLogout = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8001/api/logout",
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};
