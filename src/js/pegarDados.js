const form = document.querySelector('#cadastro-aluno')
const tabela = document.querySelector('#lista-alunos')

const matricula = document.querySelector('#matricula')
const nome = document.querySelector('#nome')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    if (matricula.value.trim().length === 0 && nome.value.trim().length === 0) {
        alert('Preencha todos os campos!')
    } else if (confirm ("Deseja adicionar o aluno " + nome.value + " na tabela?")) {
        const matriculaAluno = matricula.value
        const nomeAluno = nome.value

        const novaTr = document.createElement('tr')
        novaTr.classList.add('tr-aluno-tabela')
    
        const tdMatricula = document.createElement('td')
        tdMatricula.textContent = matriculaAluno

        const tdNome = document.createElement('td')
        tdNome.textContent = nomeAluno
        tdNome.classList.add('nome')

        const tdLixo = document.createElement('td') 
        tdLixo.innerHTML = '<button class="remove"><i class="fas fa-trash remove"></i></button>'

        novaTr.appendChild(tdMatricula)
        novaTr.appendChild(tdNome)
        novaTr.appendChild(tdLixo)

        tabela.appendChild(novaTr)

    }
})