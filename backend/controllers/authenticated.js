const jwt = require("jsonwebtoken");

const handleAuthenticated = (req, res) => {
  console.log("TOKEN", req.token);
  const token = req.cookies.authToken;
  if (!token) return res.status(401).json({ message: "Not authenticated" });

  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    res.json({ message: "Protected data", user });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { handleAuthenticated };
