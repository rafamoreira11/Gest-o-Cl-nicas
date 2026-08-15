const express = require('express')
const app = express()
const Pacientes = require("./models/Pacientes")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post("/",(req,res)=>{
    Pacientes.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        cpf: req.body.cpf,
        data_nasc: req.body.data_nasc,
        sexo: req.body.sexo,
        nome_mae: req.body.nome_mae
    }).then(()=>{
        Pacientes.findAll().then((pacientes)=>{
            res.send({pacientes: pacientes})
        }).catch((err)=>{
            res.send("Erro ao buscar pacientes - " + err)
        })
    }).catch((err)=>{
        res.send("Falha ao cadastrar usuário - "+err)
    })
})

app.get("/pacientes", (req,res)=>{
    Pacientes.findAll().then((pacientes)=>{
        res.json(pacientes)
    }).catch((err)=>{
        res.status(500).json({
            erro: "Erro ao buscar pacientes"
        })
    })
})


app.listen(3000,()=>{
    console.log("Servidor rodando...")
})