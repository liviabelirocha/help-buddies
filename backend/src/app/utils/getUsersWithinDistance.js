const User = require('../models/User');

module.exports = async function getUsersWithinDistance(id) {
  console.log(id);
  const user = await User.findById(id);

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
    console.log(others);
    return others;
  } catch (err) {
    return 'Failed to find users';
  }
};
