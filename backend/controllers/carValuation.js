const { connectionToMySql } = require("../connection");
const carValuation = async (req, res) => {
  try {
    const db = await connectionToMySql();

    const [data] = await db.query("SELECT *FROM carsvaluation");

    return res.status(200).json({ data });
  } catch (err) {
    console.log("err", err);
  }
};
module.exports = { carValuation };
