const express = require("express");
const { handleSignUp } = require("../controllers/sign-up");

const router = express.Router();

router.post("/", handleSignUp);

module.exports = router;
