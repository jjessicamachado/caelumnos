(function(){
    const tabelaDeAlunos = document.querySelector("#listagemDeAlunos");
    tabelaDeAlunos.addEventListener('click', function(event){
        if(event.target.classList.contains("removeAluno") && confirm("Tem certeza que deseja excluir?")){
            event.target.closest("tr").remove();
        }    
    })
})();