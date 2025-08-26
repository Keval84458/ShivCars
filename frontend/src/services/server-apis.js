"use server";
import axios from "axios";

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

export const getAllNewCars = async () => {
  try {
    const response = await axios.get("http://localhost:8001/api/cars");
    return response.data || null;
  } catch (err) {
    console.log("err", err);
  }
};

export const getAllCarCompony = async () => {
  try {
    const response = await axios.get("http://localhost:8001/api/car-compony");
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const addNewCar = async (payload) => {
  try {
    const res = await axios.post("http://localhost:8001/api/cars", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    console.log("Error in addNewCar:", err);
  }
};

export const getCarById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8001/api/cars/${id}`);
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const handleCarBooking = async (payload) => {
  try {
    const response = await axios.post(
      "http://localhost:8001/api/car-booking",
      payload
    );
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const handlegetAllCarBookings = async () => {
  try {
    const res = await axios.get("http://localhost:8001/api/car-booking");
    return res.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const handleBookedCarDeleteById = async (carId) => {
  try {
    const response = await axios.delete(
      `http://localhost:8001/api/car-booking/${carId}`
    );
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};
