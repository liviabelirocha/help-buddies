const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authConfig = require("../../config/auth");

module.exports = {
  async create(request, response) {
    const { email } = request.body;

    try {
      if (await User.findOne({ email })) {
        return response.status(400).send({ error: "User already exists." });
      }

      const user = await User.create(request.body);
      user.senha = undefined;

      return response.send({ user });
    } catch (err) {
      return response.status(400).send({ error: "Registration failed. " });
    }
  },

  async login(request, response) {
    const { email, senha } = request.body;
    const user = await User.findOne({ email }).select("+senha");

    if (!user) {
      return response.status(400).send({ error: "User not found." });
    }

    if (!(await bcrypt.compare(senha, user.senha))) {
      return response.status(400).send({ error: "Incorrect password. " });
    }

    user.senha = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret);

    response.send({ user, token });
  }
};
