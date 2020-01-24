(function () {
    const tabela = document.querySelector('#lista-alunos')

    tabela.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove')) {
            const tr = e.target.closest('.tr-aluno-tabela')

            confirm("Deseja excluir o usuário?")
            tr.remove()
        }
    })
})()