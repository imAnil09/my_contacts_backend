const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
  message
} = require("../contollers/userController");
router.get('/', message);
const validateAccessToken = require("../middleWare/validateAccessToken");

const router = express.Router();
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateAccessToken, currentUser);

module.exports = router;
