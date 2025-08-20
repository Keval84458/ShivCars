const { connectionToMySql } = require("../connection");
const bcrypt = require("bcrypt");

const handleSignUp = async (req, res) => {
  try {
    const db = await connectionToMySql();

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(409).json({ msg: "All fields are required.." });
    }

    const [existEmail] = await db.query("SELECT * FROM users WHERE email=?", [
      email,
    ]);
    if (existEmail.length > 0) {
      return res.json({ msg: "Email already exist..." });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const [response] = await db.query(
      "INSERT INTO users(name,email,password) VALUES(?,?,?)",
      [name, email, hashPassword]
    );

    if (response) {
      return res.status(201).json({ msg: "User registered successfully..." });
    } else {
      return res.status(500).json({ msg: "User registration failed..." });
    }
  } catch (err) {
    console.log("❌ Error in SignUp:", err);
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { handleSignUp };
