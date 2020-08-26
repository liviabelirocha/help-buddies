const Request = require('../models/Request');

module.exports = {
  async create(request, response) {
    const { userId, itemId } = request.body;

    try {
      const isCompleted = false;

      const req = await Request.create({ userId, itemId, isCompleted });

      return response.send({ req });
    } catch (err) {
      return response.status(400).send({ error: 'Failed to create request. ' });
    }
  },

  async index(request, response) {
    const { userId } = request.body;

    try {
      const reqs = await Request.find({ userId });
      return response.send({ reqs });
    } catch (err) {
      return response.status(400).send({ error: 'Failed to get requests' });
    }
  },
};
