const mongoose = require('../../database');

const RequestSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Request', RequestSchema);
