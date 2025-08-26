const express = require("express");
const {
  hadleCarBooking,
  getAllCarBookings,
  bookedCarDeleteById,
} = require("../controllers/car-booking");

const router = express.Router();

router
  .post("/", hadleCarBooking)
  .get("/", getAllCarBookings)
  .delete("/:id", bookedCarDeleteById);

module.exports = router;
