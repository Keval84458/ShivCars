const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const { connectionToMySql } = require("./connection");
const useSignUp = require("./routes/sign-up");
const useLogin = require("./routes/login");
const useAuthenticated = require("./routes/authenticated");
const useLogout = require("./routes/logout");

dotenv.config();

const app = express();

app.use(
  express.json(),
  cors({ origin: "http://localhost:3000/", credentials: true }),
  express.urlencoded({ extended: false }),
  cookieParser()
);

connectionToMySql();

app
  .use("/register", useSignUp)
  .use("/auth-with-password", useLogin)
  .use("/authenticated", useAuthenticated)
  .use("/logout", useLogout);

app.listen(process.env.PORT, () =>
  console.log(`Server Started at localhost: ${process.env.PORT}`)
);
