const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://helpbuddies:helpbuddies@helpbuddies-xsqpr.mongodb.net/helpbuddies?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
);

module.exports = mongoose;
