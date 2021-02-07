const { User } = require('../app/models');

module.exports = {
    async index(request, response) { //READ
        const users = await User.findAll({attributes: ['id', 'name', 'email', 'createdAt']})
        return response.json(users)

    },

    async store(request, response) { //CREATE
        const { name, email, password } = req.body
         const user = await User.create({name, email, password})
         response.json(user)
    },

    async show(request, response) { //READ BY ID
        const { id } = request.params
        const user = await User.findOne({ where: {id: id}, attributes: ['id', 'name', 'email']})

        if(!user) {
            response.json({})
        } else {
            response.json(user)
        }
    },

    async update(request, response) { //UPDATE

    },

    async destroy(request, response) { //DELETE
        
    }
}