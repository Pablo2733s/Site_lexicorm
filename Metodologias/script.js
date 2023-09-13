// script.js

// Função para recarregar a página quando o título h1 for clicado
function recarregarPagina() {
    location.reload();
}

// Adicionar um ouvinte de evento ao carregar a página
window.addEventListener("load", function() {
    // Seletor para o título h1
    var tituloH1 = document.querySelector('h1');

    // Adicionar um ouvinte de evento de clique ao título h1
    tituloH1.addEventListener("click", recarregarPagina);
});

var texto = document.querySelector('img');
window.onload = function (){

    var mensagemDiv = document.getElementById("mensagem");
    alert("Seja bem vindo ao nosso site do Projeto Integrador");
}