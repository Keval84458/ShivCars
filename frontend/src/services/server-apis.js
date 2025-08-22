"use server";
import axios from "axios";

export const handleSignup = async (payload) => {
  try {
    const response = await axios.post(
      "http://localhost:8001/api/register",
      payload
    );
    console.log("response", response);
    return response.data;
  } catch (err) {
    console.log("err", err.response ? err.response.data : err.message);
    throw err;
  }
};
