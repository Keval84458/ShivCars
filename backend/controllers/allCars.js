const { connectionToMySql } = require("../connection");

const handleImagUpload = async (req, res) => {
  console.log("File uploaded:", req.file);
  const db = await connectionToMySql();

  const {
    companyId,
    carName,
    address,
    model,
    price,
    contactNo,
    status,
    ownerName,
    owner,
    regNo,
    description,
  } = req.body;
  console.log("compony ID", companyId);

  const carImage = req.file ? `/api/uploads/${req.file.filename}` : "";
  console.log("carImage", carImage);

  const sql = `
    INSERT INTO allcars (carImage, companyId, carName, address, model, price, contactNo,status,ownerName,owner,regNo,description)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      carImage,
      companyId,
      carName,
      address,
      model,
      price,
      contactNo,
      status,
      ownerName,
      owner,
      regNo,
      description,
    ],
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
          description,
          status,
          ownerName,
          owner,
        },
      });
    }
  );
};

const getAllNewCars = async (req, res) => {
  try {
    const db = await connectionToMySql();

    const [rows] = await db.query("SELECT * FROM allcars ORDER BY id DESC");

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
};

const handleCarDeleteById = async (req, res) => {
  try {
    const db = await connectionToMySql();
    const deleteCarId = req.params.id;
    console.log("deleteCarId", deleteCarId);

    if (!deleteCarId) {
      return res
        .status(400)
        .json({ success: false, msg: "Car ID is required." });
    }

    const [result] = await db.query("DELETE FROM allcars WHERE id = ?", [
      deleteCarId,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, msg: "Car not found." });
    }

    return res
      .status(200)
      .json({ success: true, msg: "Car deleted successfully." });
  } catch (err) {
    console.error("Error deleting car:", err);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error." });
  }
};

const getOneCarById = async (req, res) => {
  try {
    const db = await connectionToMySql();
    const carId = req.params.id;

    const [rows] = await db.query("SELECT * FROM allcars WHERE id=?", [carId]);

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
};

module.exports = {
  handleImagUpload,
  getAllNewCars,
  handleCarDeleteById,
  getOneCarById,
};

// CREATE TABLE allcars (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   carImage VARCHAR(255),
//   companyId INT,
//   carName VARCHAR(100) NOT NULL,
//   address VARCHAR(255),
//   model VARCHAR(50),
//   price DECIMAL(12,2),
//   contactNo VARCHAR(20),
//   status ENUM('available', 'sold', 'pending') DEFAULT 'available',
//   ownerName VARCHAR(100),                          -- Owner Name
//   ownerType ENUM('individual', 'dealer', 'showroom') DEFAULT 'individual',  -- How owner
//   description TEXT,
//   FOREIGN KEY (companyId) REFERENCES company(id) ON DELETE CASCADE
// );
