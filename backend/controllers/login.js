const { connectionToMySql } = require("../connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  try {
    const db = await connectionToMySql();
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (!rows || rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const jwtToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "7d" }
    );

    res.cookie("authToken", jwtToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, //// 7 days in milliseconds
    });

    return res.status(200).json({
      message: "Login successful",
      status: 200,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { handleLogin };
