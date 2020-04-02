const express = require("express");

const AuthController = require("./app/controllers/AuthController");
const UserController = require("./app/controllers/UserController");

const SignUpValidation = require("./app/validations/SignUpValidation");
const LoginValidation = require("./app/validations/LoginValidation");

const authMiddleware = require("./app/middlewares/auth");

const routes = express.Router();

//Auth
routes.post("/register", SignUpValidation, AuthController.create); //Cadastro de usuário
routes.post("/login", LoginValidation, AuthController.login); //Login do usuário

//User
routes.get("/radius", authMiddleware, UserController.index);
routes.post("/radius", authMiddleware, UserController.setRadius);

module.exports = routes;
