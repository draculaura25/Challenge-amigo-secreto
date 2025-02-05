//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const nomes = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo').value;
    const listaAmigos = document.getElementById('listaAmigos');
    const mensagemErro = document.getElementById('resultado');

    if (nomeInput.trim() === "") {
        mensagemErro.textContent = "Por favor insira um nome válido";
        mensagemErro.style.color = "red";
    } else {
        nomes.push(nomeInput);
        atualizarLista();
        mensagemErro.textContent = "";
    }

    document.getElementById('amigo').value = "";
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        const mensagemErro = document.getElementById('resultado');
        mensagemErro.textContent = "Por favor insira um nome válido";
        mensagemErro.style.color = "red";
        return;
    }

    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto é: ${sorteado}`;
    resultado.style.color = "green";
}
