const express = require("express");

const AuthController = require("./controllers/AuthController");

const routes = express.Router();

//Cadastro de usuário
routes.post("/register", AuthController.create);

module.exports = routes;
