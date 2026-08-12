const express = require('express')
const app = express()
const Pacientes = require("./models/Pacientes")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/cadastro",(req,res)=>{
    Pacientes.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        data_nasc: req.body.data_nasc,
        sexo: req.body.sexo,
        nome_mae: req.body.nome_mae
    }).then(()=>{
        res.send("Informações salvas no baco de dados")
    }).catch((err)=>{
        res.send("Falha ao cadastrar usuário - "+err)
    })
})

app.listen(3000,()=>{
    console.log("Servidor rodando...")
})