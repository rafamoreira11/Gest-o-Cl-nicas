const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    "cadastro",
    "root",
    "admin",
    {
        dialect: "mysql",
        host: "localhost"
    }
)

sequelize.authenticate().then(()=>{
    console.log("Conexão com banco de dados realizada com sucesso!")
}).catch((err)=>{
    console.log("Erro ao conectar banco de dados - "+err)
})

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}