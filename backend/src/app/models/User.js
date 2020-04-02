const mongoose = require("../../database");
const bcrypt = require("bcryptjs");

const PointSchema = require("./utils/PointSchema");

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  senha: {
    type: String,
    required: true,
    select: false
  },
  raio: Number,
  localizacao: {
    type: PointSchema
    //index: "2dsphere"
  }
});

UserSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;
  next();
});

module.exports = mongoose.model("User", UserSchema);
