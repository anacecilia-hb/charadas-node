const Sequelize = require('sequelize'); // Importando o sequelize
const connection = require('./database'); // Importando o bd

//model de pergunta
const Pergunta = connection.define('pergunta',{
    titulo:{
        type: Sequelize.STRING, //tipo |texto menor
        allowNull: false, //n pode valor nulo
    },
    descricao:{
        type: Sequelize.TEXT, // |texto maior
        allowNull: false,
    },
    categoriaId:{
        type: Sequelize.INTEGER, // será a fk para a tabela categoria
        allowNull: false
    }
});

//criar model
Pergunta.sync({force: false}).then(() => {
    console.log('Tabela criada!');
});

module.exports = Pergunta;