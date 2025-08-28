const express = require("express");
const { handleCreateFinance } = require("../controllers/finance");

const router = express.Router();

router.post("/", handleCreateFinance);
module.exports = router;
