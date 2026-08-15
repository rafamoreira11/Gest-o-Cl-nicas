const cadastroPage = document.getElementById("cadastrar-pacientes")
const listarPage = document.getElementById("listar-pacientes")

cadastroPage.addEventListener("click", (e)=>{
    window.location.href = "/front/pages/index.html"
})

listarPage.addEventListener("click", (e)=>{
    window.location.href = "/front/pages/listaPacientes.html"
})

async function mostraPaciente(){
    const resposta = await fetch("http://localhost:3000/pacientes")

    const pacientes = await resposta.json()

    const tabela = document.getElementById("tabela-pacientes")

    pacientes.forEach(paciente => {
        tabela.innerHTML += ` 
            <tr>
                <td>${paciente.nome}</td>
                <td>${paciente.sobrenome}</td>
                <td>${paciente.cpf}</td>
                <td>${paciente.data_nasc}</td>
                <td>${paciente.sexo}</td>
                <td>${paciente.nome_mae}</td>
            </tr>
        `
    });
}

mostraPaciente()