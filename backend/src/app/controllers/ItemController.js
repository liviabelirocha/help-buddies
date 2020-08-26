const Item = require('../models/Item');

module.exports = {
  async create(request, response) {
    try {
      const req = await Item.create(request.body);

      return response.send({ req });
    } catch (err) {
      return response.status(400).send({ error: 'Failed to create item. ' });
    }
  },

  async index(request, response) {
    try {
      const items = await Item.find({ tipo: request.body.tipo });

      return response.send({ items });
    } catch (err) {
      return response.status(400).send({ error: 'Failed to find items' });
    }
  },
};
