const Sequelize = require('sequelize');

//realize sua conexão aqui
const connection = new Sequelize('charadas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    timezone: '-03:00'
});

module.exports = connection;