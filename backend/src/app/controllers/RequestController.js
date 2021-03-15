const Request = require('../models/Request');

const getUsersWithinDistance = require('../utils/getUsersWithinDistance');

module.exports = {
  async create(request, response) {
    const { userId, itemId, canPickUp } = request.body;

    try {
      const isCompleted = false;

      const req = await Request.create({
        userId,
        itemId,
        isCompleted,
        canPickUp,
      });

      return response.send({ req });
    } catch (err) {
      return response.status(400).send({ error: 'Failed to create request. ' });
    }
  },

  async index(request, response) {
    const { userId } = request.body;
    try {
      const reqs = await getUsersWithinDistance(userId);
      // const reqs = await Request.find({ isCompleted: false });
      return response.send({ reqs });
    } catch (err) {
      return response.status(400).send({ error: 'Failed to get requests' });
    }
  },

  async get(request, response) {
    const { userId } = request.body;

    try {
      const reqs = await Request.find({ userId });
      return response.send({ reqs });
    } catch (err) {
      return response.status(400).send({ error: 'Failed to get requests' });
    }
  },
};
