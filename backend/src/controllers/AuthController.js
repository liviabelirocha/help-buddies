const User = require("../models/User");

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
  }
};
