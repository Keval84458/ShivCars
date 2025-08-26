const express = require("express");
const upload = require("../multerConfig");
const router = express.Router();
const {
  handleImagUpload,
  getAllNewCars,
  handleCarDeleteById,
  getOneCarById,
} = require("../controllers/allCars");

router
  .post("/", upload.single("carImage"), handleImagUpload)
  .get("/", getAllNewCars)
  .delete("/:id", handleCarDeleteById);

router.get("/:id", getOneCarById);

module.exports = router;
