const express = require("express");
const { registerUser, loginUser } = require("../controllers/user.controllers");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);



module.exports = router;
