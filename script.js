let ini = 0;
let fim = 0;
let palp = 0;
let NSecreto = 0;
let tent = 10;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('rangeForm').addEventListener('submit', defineIntervalo);
});

function defineIntervalo(event){
    event.preventDefault();
    ini = parseInt(document.getElementById("minRange").value);
    fim = parseInt(document.getElementById("maxRange").value);
    NSecreto = Math.floor(Math.random() * (fim - ini + 1) + ini);
    document.getElementById('gameTitle').textContent = `Adivinhe o número entre ${ini} e ${fim}`;
    document.getElementById('input').min = ini;
    document.getElementById('input').max = fim;
    document.getElementById('palpiteForm').style.display = 'block';
    document.getElementById('rangeForm').style.display = 'none';
    atualizaTent();
}

function palpite(){
    palp = parseInt(document.getElementById("input").value);
    validaPalpite();
    buscaBinaria();
}

// O restante do código JavaScript permanece o mesmo


function validaPalpite(){
    if(palp == NSecreto){
        document.getElementById('mensagemFinal').innerHTML = `Você acertou, o número secreto é ${NSecreto}! <button onclick="resetGame()">Reiniciar Jogo</button>`;
        document.getElementById('dicas').innerHTML = ""; // Limpa as dicas para não confundir após o jogo terminar
        document.getElementById('palpiteForm').style.display = 'none'; // Esconde o formulário de palpite
    } else if(palp > NSecreto){
        alert("O número é maior que o número secreto.");
    } else {
        alert("O número é menor que o número secreto");
    }
}

function resetGame() {
    location.href = "index.html"; // Reinicia a página
}


function buscaBinaria(){
    tent--;
    atualizaTent();
    let meio = Math.floor((ini + fim) /2);
    let section = document.getElementById("dicas");
    console.log(meio, NSecreto);

    if(meio === NSecreto){
        section.innerHTML = `O número secreto é o ponto médio entre ${ini} e ${fim}`;
        return;

    } else if(meio > NSecreto){
        fim = meio -1 
    } else {
        ini = meio +1
    }
    section.innerHTML = `O número está entre ${ini} e ${fim}`;
    return
}

function atualizaTent() {
    document.getElementById('tentativasRestantes').textContent = 'Tentativas restantes: ' + tent;
}
atualizaTent();