const { connectionToMySql } = require("../connection");

const getAllCarCompany = async (req, res) => {
  try {
    const db = await connectionToMySql();

    const [rows] = await db.query("SELECT * FROM company");

    return res.status(200).json({
      success: true,
      companies: rows,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server/Database error",
      error: err.message,
    });
  }
};

module.exports = { getAllCarCompany };
