let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim(); // Remove espaços em branco no início e no fim

    // Validação: verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return; // Sai da função se o campo estiver vazio
    }

    // Verifica se o nome já está na lista
    if (amigos.includes(nome)) {
        alert(`O nome ${nome} já está na lista.`);
        return; // Sai da função se o nome já existir
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Limpa o campo de texto
    inputAmigo.value = "";

    // Atualiza a lista exibida na página
    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada nome da lista ao <ul>
    amigos.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Verifica se há nomes na lista
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return; // Sai da função se a lista estiver vazia
    }

    // Sorteia um índice aleatório da lista
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceSorteado];

    // Exibe o resultado na página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo secreto: <strong>${amigoSecreto}</strong>`;
}