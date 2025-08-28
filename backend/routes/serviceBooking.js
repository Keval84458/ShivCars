const express = require("express");
const { handleServiceBooking } = require("../controllers/serviceBooking");

const router = express.Router();

router.post("/", handleServiceBooking);

module.exports = router;
