const cadastroPage = document.getElementById("cadastrar-pacientes")
const listarPage = document.getElementById("listar-pacientes")

cadastroPage.addEventListener("click", (e)=>{
    window.location.href = "/front/pages/index.html"
})

listarPage.addEventListener("click", (e)=>{
    window.location.href = "/front/pages/listaPacientes.html"
})