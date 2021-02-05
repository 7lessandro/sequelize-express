const express = require('express')
const UserController = require('./controllers/UserController')

// const Op = Sequelize.Op; // biblioteca de operadores

const routes = express.Router();



/*
-> ROTAS DA API <-
*/

//GET
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

module.exports = routes;