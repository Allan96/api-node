const express = require('express');

const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

routes.get('/users/:id', UserController.index);
// routes.post('/users', UserController.store);

routes.post('/login', LoginController.index);

module.exports = routes;