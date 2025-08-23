const express = require("express");
const { getAllCarCompany } = require("../controllers/carCompony");

const router = express.Router();

router.get("/", getAllCarCompany);

module.exports = router;
