const express = require("express");
const { handleAuthenticated } = require("../controllers/authenticated");

const router = express.Router();

router.get("/", handleAuthenticated);

module.exports = router;
