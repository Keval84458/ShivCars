const express = require("express");
const { handleSearchCarFilter } = require("../controllers/searchCarFilter");

const router = express.Router();

router.get("/search-car", handleSearchCarFilter);

module.exports = router;
