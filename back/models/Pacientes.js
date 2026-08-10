const db = require("./db")

const Pacientes = db.sequelize.define("pacientes",{
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false 
    },
    sobrenome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    data_nasc: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    sexo: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    nome_mae: {
        type: db.Sequelize.STRING,
        allowNull: true
    }
})

Pacientes.sync({force: false})

module.exports = Pacientes