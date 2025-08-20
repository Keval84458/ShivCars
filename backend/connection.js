const mysql = require("mysql2/promise");

const connectionToMySql = async () => {
  try {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "shivcars",
    });
    console.log("✅ MySQL connected successfully!");
    return db;
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
    throw err;
  }
};

module.exports = { connectionToMySql };
