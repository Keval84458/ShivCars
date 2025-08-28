const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectionToMySql } = require("./connection");
const useSignUp = require("./routes/sign-up");
const useLogin = require("./routes/login");
const useAuthenticated = require("./routes/authenticated");
const useLogout = require("./routes/logout");
const cookieParser = require("cookie-parser");
const useImgUpload = require("./routes/allCars");
const useCarCompony = require("./routes/carCompony");
const useCarBooking = require("./routes/car-booking");
const useCarValuation = require("./routes/carValuation");
const useInsurance = require("./routes/insurance");
const useFinance = require("./routes/finance");
const useServiceBooking = require("./routes/serviceBooking");
const useSearchCarFilter = require("./routes/searchCarFilter");
const useContactForm = require("./routes/contactForm");

dotenv.config();
const app = express();

app.use(
  express.urlencoded({ extended: false }),
  express.json(),
  cookieParser()
);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (
        origin.startsWith("http://localhost:3000") ||
        origin.startsWith("http://127.0.0.1:3000") ||
        /^http:\/\/(192\.168|10\.)\.\d+\.\d+:3000$/.test(origin)
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

connectionToMySql();

app.use("/api/uploads", express.static("uploads"));

app
  .use("/api/register", useSignUp)
  .use("/api/auth-with-password", useLogin)
  .use("/api/authenticated", useAuthenticated)
  .use("/api/logout", useLogout)
  .use("/api/cars", useImgUpload)
  .use("/api/car-compony", useCarCompony)
  .use("/api/car-booking", useCarBooking)
  .use("/api/car-valuation", useCarValuation)
  .use("/api/insurance", useInsurance)
  .use("/api/finance", useFinance)
  .use("/api/service-booking", useServiceBooking)
  .use("/api", useSearchCarFilter)
  .use("/api/contact", useContactForm);

app.listen(process.env.PORT, () =>
  console.log(`Server Started at 0.0.0.0 localhost:${process.env.PORT}`)
);
