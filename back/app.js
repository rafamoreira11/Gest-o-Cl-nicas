const express = require('express')
const app = express()
const Pacientes = require("./models/Pacientes")
const bodyParser = require("body-parser")

app.listen(3000,()=>{
    console.log("Servidor rodando...")
})