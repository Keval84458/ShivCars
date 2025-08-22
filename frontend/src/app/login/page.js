import { PageWrapper } from "@/utils";
import React from "react";
import LoginForm from "./_layouts/login-form";

const Login = () => {
  return (
    <PageWrapper pb={2}>
      <LoginForm />
    </PageWrapper>
  );
};

export default Login;

// CREATE TABLE users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   email VARCHAR(100) UNIQUE NOT NULL,
//   password VARCHAR(255) NOT NULL
// );
