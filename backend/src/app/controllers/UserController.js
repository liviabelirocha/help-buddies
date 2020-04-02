const User = require("../models/User");

module.exports = {
  async index(request, response) {
    const id = request.userId;
    try {
      const user = await User.findById(id);
      return response.send({ user });
    } catch (err) {
      return response.status(400).send({ error: "Failed to find user." });
    }
  },

  async setRadius(request, response) {
    const { raio } = request.body;
    const id = request.userId;

    try {
      const res = await User.findByIdAndUpdate(
        id,
        { raio: raio },
        { new: true }
      );
      return response.send({ res });
    } catch (err) {
      return response.status(400).send({ error: "Failed to set radius." });
    }
  }
};