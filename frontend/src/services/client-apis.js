"use client";
import axios from "axios";

export const isAuthenticated = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8001/api/authenticated",
      {
        withCredentials: true,
      }
    );
    console.log("isAuthenticated", response);
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
    console.log("response from server", response);
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const handleLogout = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8001/api/logout",
      {},
      { withCredentials: true }
    );
    console.log("response");
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

// export const addNewCar = async (payload) => {
//   try {
//     const res = await axios.post("http://localhost:8001/api/cars", payload, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return res.data;
//   } catch (err) {
//     console.log("Error in addNewCar:", err);
//   }
// };
