const handleLogout = (req, res) => {
  res.clearCookie("authToken");
  return res.status(200).json({ msg: "User logged out successfully..." });
};

module.exports = { handleLogout };
