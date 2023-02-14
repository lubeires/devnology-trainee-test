const User = require("../models/user");
const jwt = require("jsonwebtoken");

const createToken = (_id) =>
  jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "5d" });

// login user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // sign json web token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// register user
const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.register(email, password);

    // sign json web token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { login, register };
