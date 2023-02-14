const express = require("express");
const { login, register } = require("../controllers/user");

const router = express.Router();

// login user
router.post("/login", login);

// register user
router.post("/register", register);

module.exports = router;
