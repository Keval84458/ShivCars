const express = require("express");
const { handleCreateInsurance } = require("../controllers/insurance");

const router = express.Router();

router.post("/", handleCreateInsurance);

module.exports = router;
