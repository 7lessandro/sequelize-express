const { User } = require('../app/models');

class UserController {
    async index(request, response) { //READ
        const users = await User.findAll({attributes: ['id', 'name', 'email']})
        return response.json(users)

    }

    async store(request, response) { //CREATE
        const { name, email, password } = request.body
         const user = await User.create({ name, email, password })

         if(!user) {
            response.status(404).json({message: 'error creating user'})
         } else {
            response.json(user)
         }
    }

    async show(request, response) { //READ BY ID
        const { id } = request.params
        const user = await User.findOne({ where: {id: id}, attributes: ['id', 'name', 'email']})
        
        if(!user) {
            response.status(404).json({message: 'error querying ID'})
        } else {
            response.json(user)
        }
    }

    async update(request, response) { //UPDATE
        const { id } = request.params
        const { name, email } = request.body
        const user = await User.update({ name: name, email: email }, { where: {id: id}})

        if(user < 1) {
            response.status(404).json({message: 'unable to edit user'})
        } else {
            response.json(user)
        }
    }

    async delete(request, response) { //DELETE
        const { id } = request.params
        const user = await User.destroy({ where: {id: id} })
        
        if(user < 1) {
            response.status(404).json({message: 'could not delete user'})
        }
    }
}

module.exports = new UserController();