module.exports = {
  username: 'root',
  password: '123456',
  database: 'sequelize_express',
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false,
  difine: {
    timestamps: true,
    underscored: true
  }
}

// const Sequelize = require('sequelize');

// const connection = new Sequelize('sequelize_express', 'root', '123456', {
//     logging: false,
//     host: 'localhost',
//     dialect: 'mysql'
//     //timezone: '-03:00'
// })

// module.exports = connection;