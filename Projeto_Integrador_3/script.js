function performSearch() {
    const input = document.getElementById('search-input');
    const searchTerm = input.value.toLowerCase();

    // Enviar uma solicitação POST para a rota do servidor
    fetch('http://localhost:3000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            searchTerm: searchTerm
        })
    })
    .then(response => response.json())
    .then(results => {
        // Processar os resultados da pesquisa
        if (results.length > 0) {
            // Redirecionar para o link encontrado
            window.location.href = results[0].link;
        } else {
            // Tratar o caso de nenhum resultado encontrado
            console.log('Nenhum resultado encontrado.');
        }
    })
    .catch(error => {
        console.error('Erro ao executar a pesquisa:', error);
    });
}
