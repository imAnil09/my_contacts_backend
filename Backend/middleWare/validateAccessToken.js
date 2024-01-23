const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const validateAccessToken = asyncHandler(async (req, res, next) => {
  let token;

  const authHeader = req.header("Authorization" || "authorization");

  if (authHeader && authHeader.split(" ")[0] === "Bearer") {
    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOCKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }

      req.user = decoded.user;
      next();
    });

    if (!token) {
      res.status(401);
      throw new Error("No token provided");
    }
  }
});

module.exports = validateAccessToken;
