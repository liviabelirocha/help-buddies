const User = require('../models/User');

module.exports.index = async function (request, response) {
  const id = request.userId;
  console.log(id);
  try {
    const user = await User.findById(id);
    console.log(user);
    try {
      const others = await User.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: user.location.coordinates,
            },
            $maxDistance: user.raio,
          },
        },
      });
      return response.send({ others });
    } catch (err) {
      return response.status(400).send({ error: 'Failed to get other users.' });
    }
  } catch (err) {
    return response.status(400).send({ error: 'Failed to get user.' });
  }
};
