const express = require("express");

const AuthController = require("./app/controllers/AuthController");
const SignUpValidation = require("./app/validations/SignUpValidation");
const LoginValidation = require("./app/validations/LoginValidation");

const routes = express.Router();

//Auth
routes.post("/register", SignUpValidation, AuthController.create); //Cadastro de usuário
routes.post("/login", LoginValidation, AuthController.login); //Login do usuário

module.exports = routes;
