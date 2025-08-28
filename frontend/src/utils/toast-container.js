"use client";
import { ToastContainer } from "react-toastify";

const ToastProvider = () => {
  return (
    <ToastContainer position="top-right" autoClose={1500} theme="colored" />
  );
};

export default ToastProvider;
