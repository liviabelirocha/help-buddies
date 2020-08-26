const express = require('express');

const AuthController = require('./app/controllers/AuthController');
const UserController = require('./app/controllers/UserController');
const DistanceController = require('./app/controllers/DistanceController');
const ItemController = require('./app/controllers/ItemController');
const RequestController = require('./app/controllers/RequestController');

const SignUpValidation = require('./app/validations/SignUpValidation');
const LoginValidation = require('./app/validations/LoginValidation');

const authMiddleware = require('./app/middlewares/auth');

const routes = express.Router();

// Auth
routes.post('/register', SignUpValidation, AuthController.create); // Cadastro de usuário
routes.post('/login', LoginValidation, AuthController.login); // Login do usuário

// User
routes.get('/user', authMiddleware, UserController.index);
routes.put('/user', authMiddleware, UserController.setRadius);
routes.post('/user', authMiddleware, UserController.setLocation);

// Distancia
routes.get('/distance', authMiddleware, DistanceController.index);

// Items
routes.post('/items', authMiddleware, ItemController.create);
routes.get('/items', authMiddleware, ItemController.index);

// Requests
routes.post('/requests', authMiddleware, RequestController.create);
routes.get('/requests', authMiddleware, RequestController.index);

module.exports = routes;
