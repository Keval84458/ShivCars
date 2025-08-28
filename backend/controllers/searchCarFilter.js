const { connectionToMySql } = require("../connection");

const handleSearchCarFilter = async (req, res) => {
  try {
    const db = await connectionToMySql();

    const carName = req.query.carName;

    const sql = `SELECT * FROM allcars WHERE LOWER(carName) LIKE ? `;

    const [rows] = await db.query(sql, [`${carName.toLowerCase()}%`]);

    return res.status(200).json({ cars: rows, totalCount: rows.length });
  } catch (err) {
    console.error("Search error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { handleSearchCarFilter };
