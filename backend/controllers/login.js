const { connectionToMySql } = require("../connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  try {
    const db = await connectionToMySql();

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(409).json({ msg: "All fields are requaired..." });
    }

    const [existUser] = await db.query("SELECT * FROM users WHERE email=?", [
      email,
    ]);
    const user = existUser[0];

    const isMatch = await bcrypt.compare(password, user.password);

    const jwtToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.SECRET_KEY
    );

    res.cookie("authToken", jwtToken, {
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });

    res.status(200).json({
      msg: "User Login successfully...",
      user: { id: user.id, name: user.name, email: user.email },
      token: jwtToken,
    });
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = { handleLogin };
