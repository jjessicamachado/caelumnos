(function () {
    const tabela = document.querySelector('#lista-alunos')

    tabela.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove') && confirm("Deseja excluir o aluno?")) {
            const tr = e.target.closest('.tr-aluno-tabela')
            tr.classList.add('tr-transicao')

            tr.addEventListener('transitionend', function () {
                tr.remove()
            })


        }
    })
})()