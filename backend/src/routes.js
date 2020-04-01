const express = require("express");

const AuthController = require("./controllers/AuthController");

const routes = express.Router();

//Auth
routes.post("/register", AuthController.create); //Cadastro de usuário
routes.post("/login", AuthController.login); //Login do usuário

module.exports = routes;
