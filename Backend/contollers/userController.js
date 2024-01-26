const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//@desc Register a user
//@route POST /api/users/register
//access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400)
    throw new Error("User already registered!");
  }

  //hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Passwored : ", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(user, "created User");

  if (user) {
    res.status(201).json({ _id: user._id, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid user details!");
  }

  res.status(200).json({ message: "Register a user" });
});

//@desc Login a user
//@route POST /api/users/Login
//access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const user = await User.findOne({ email });

  //compare the password with user we have in our db
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOCKEN_SECRET, // Signature_Secret_Key
      { expiresIn: "30m" } // expiration time of the accessToken
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or Password is incorrect!");
  }

  // const contacts = await Contact.find();
  res.status(200).json({ message: "Login a user" });
});

//@desc Current user
//@route GET /api/users/current
//access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
