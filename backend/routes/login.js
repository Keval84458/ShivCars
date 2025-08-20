const express = require("express");
const { handleLogin } = require("../controllers/login");

const router = express.Router();

router.post("/", handleLogin);

module.exports = router;
