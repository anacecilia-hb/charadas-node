const Sequelize = require('sequelize'); // Importando o sequelize
const connection = require('./database'); // Importando o bd

//model da resposta
const Resposta = connection.define('resposta',{
    corpo:{
        type: Sequelize.TEXT, //tipo |texto menor
        allowNull: false, //n pode valor nulo
    },
    perguntaId:{
        type: Sequelize.INTEGER, // será a fk para a tabela pergunta
        allowNull: false,
    }
});

//criar model
Resposta.sync({force: false});

module.exports = Resposta;