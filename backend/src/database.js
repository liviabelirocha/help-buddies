const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://helpbuddies:helpbuddies@helpbuddies-xsqpr.mongodb.net/helpbuddies?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = mongoose;
