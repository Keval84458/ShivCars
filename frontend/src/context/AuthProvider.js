"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { isAuthenticated } from "@/services/client-apis";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);

  const fetchAuthenticated = async () => {
    try {
      const response = await isAuthenticated();
      console.log("auth Reaponse", response);
      setAuthenticated(response);
    } catch (err) {
      console.log("Auth check failed:", err);
      setAuthenticated(false);
    }
  };

  useEffect(() => {
    fetchAuthenticated();
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
