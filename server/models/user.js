const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hash: {
    type: String,
    required: true,
  },
});

// static register method
UserSchema.statics.register = async function (email, password) {
  // validate email and password
  if (!email || !password) throw Error("Preencha todos os campos.");
  if (!validator.isEmail(email)) throw Error("Forneça um email válido.");
  if (!validator.isStrongPassword(password))
    throw Error("Forneça uma senha forte.");

  const exists = await this.findOne({ email });

  if (exists) throw Error("Email já registrado...");

  // encode user password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, hash: hash });

  return user;
};

// static login method
UserSchema.statics.login = async function (email, password) {
  // validate email and password
  if (!email || !password) throw Error("Preencha todos os campos.");

  const user = await this.findOne({ email });

  if (!user) throw Error("Email não registrado...");

  const passMatch = await bcrypt.compare(password, user.hash);

  if (!passMatch) throw Error("Senha incorreta.");

  return user;
};

module.exports = mongoose.model("User", UserSchema);
