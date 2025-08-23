const express = require("express");
const { connectionToMySql } = require("../connection");
const upload = require("../multerConfig");
const router = express.Router();

router.post("/", upload.single("carImage"), async (req, res) => {
  const db = await connectionToMySql();

  const { companyId, carName, address, model, price, contactNo, status } =
    req.body;
  console.log("compony ID", companyId);

  const carImage = req.file ? `/api/uploads/${req.file.filename}` : "";
  console.log("carImage", carImage);

  const sql = `
    INSERT INTO cars (carImage, companyId, carName, address, model, price, contactNo,status)
    VALUES (?, ?, ?, ?, ?, ?, ?,?)
  `;

  db.query(
    sql,
    [carImage, companyId, carName, address, model, price, contactNo, status],
    (err, result) => {
      if (err) {
        console.error("❌ DB Error:", err);
        return res.status(500).json({
          success: false,
          message: "Database error",
          error: err.message,
        });
      }

      return res.status(201).json({
        success: true,
        message: "Car added successfully 🚗",
        id: result.insertId,
        car: {
          companyId,
          carName,
          address,
          model,
          price,
          contactNo,
          carImage,
        },
      });
    }
  );
});

router.get("/", async (req, res) => {
  try {
    const db = await connectionToMySql();

    const [rows] = await db.query("SELECT * FROM cars");

    return res.status(200).json({
      success: true,
      count: rows.length,
      cars: rows,
    });
  } catch (err) {
    console.error("❌ Database/Server Error:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch cars",
      error: err.message,
    });
  }
});

module.exports = router;
