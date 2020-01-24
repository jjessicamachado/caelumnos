(function () {
    const tabela = document.querySelector('#lista-alunos')

    tabela.addEventListener('click', function(e) {
        if(e.target.classList.contains('nome')) {
            e.target.setAttribute("contenteditable", "true")
        }
    })
})()
        