const jwt = require("jsonwebtoken");
const handleAuthenticated = (req, res) => {
  const token = req.cookies.authToken;
  if (!token) {
    return res.status(409).json({ msg: "Not authenticated..." });
  }
  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    res.status(200).json({ msg: "User Authenticated...", user });
  } catch (err) {
    res.status(409).json({ msg: "Invalid Token" });
  }
};

module.exports = { handleAuthenticated };
