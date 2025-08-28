const express = require("express");
const { handleContactForm } = require("../controllers/contactForm");

const router = express.Router();

router.post("/", handleContactForm);

module.exports = router;
