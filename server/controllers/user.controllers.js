const User = require("../models/User");
const asyncHandler = require("express-async-handler");

const generateToken = require("../utils/jwt");
const registerUser = asyncHandler(async (req, res) => {
  const { name, userName, password, pic, email } = req.body;
  const userExists = await User.findOne({ email });
  const usernameExists = await User.findOne({ userName });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  if (usernameExists) {
    res.status(400);
    throw new Error("Username already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    userName: userName,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
      userName: user.userName,
      followers: user.followers,
      following: user.following,
      bio: user.bio,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
const loginUser = (req, res) => {
  res.send("Login");
};

module.exports = {
  registerUser,
  loginUser,
};
