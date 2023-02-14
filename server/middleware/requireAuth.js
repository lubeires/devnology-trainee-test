const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  // check authorization
  if (!authorization)
    return res.status(401).json({ error: "Token de autorização necessário." });

  // Bearer _token_
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (err) {
    res.status(401).json({ error: "Requisição não autorizada." });
  }
};

module.exports = requireAuth;
