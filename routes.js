const express = require('express')
const UserController = require('./controllers/UserController')

// const Op = Sequelize.Op; // biblioteca de operadores

const routes = express.Router();

/*
-> ROTAS DA API <-
*/

//GET
routes.get('/users', UserController.index)
routes.get('/user/:id', UserController.show)

//POST
routes.post('/users', UserController.store)

//PUT
routes.post('/user/:id', UserController.update)

//DELETE
routes.post('/user/:id', UserController.destroy)

module.exports = routes;