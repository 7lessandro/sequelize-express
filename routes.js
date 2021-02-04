const express = require('express')
const router = express.Router();

const { User } = require('./')

//CONTROLLERS

//MIDDLEWARES





/*
-> ROTAS DA API <-
*/

//GET
router.get('/users', (req, res) => {
    User.create({ name: 'Ale', email: 'ale@hotmail.com', password: '123' });
    console.log('Olá')
})

//POST

//PUT

//DELETE

module.exports = router;