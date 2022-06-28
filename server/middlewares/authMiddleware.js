const jwt = require("jsonwebtoken");
const dbOperation = require("../../database/dbOperation");

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "mysecretkey");
      req.user = await dbOperation.getId(decoded.id);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Invalid token" });
    }
  }
  if (!token) {
    res.status(401).json({ message: "No token" });
    console.log("No token");
  }
};

module.exports = { protect };
