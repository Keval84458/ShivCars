const express = require("express");
const { carValuation } = require("../controllers/carValuation");

const router = express.Router();

router.get("/", carValuation);

module.exports = router;
