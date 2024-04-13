const Sequelize = require('sequelize'); // Importando o sequelize
const connection = require('./database'); // Importando o bd

//model da categoria
const Categoria = connection.define('categoria',{
    titulo:{
        type: Sequelize.STRING, //tipo |texto menor
        allowNull: false, //n pode valor nulo
    }
});

//criar model
Categoria.sync({force: false});

module.exports = Categoria;