let ini = 0;
let fim = 0;
let palp = 0;
let NSecreto = 0;
let tent = 10;

document.addEventListener("DOMContentLoaded", intervalo());

function intervalo(){
    ini = parseInt(prompt("Digite o número inicial do intervalo"));
    fim = parseInt(prompt("Digite o número final do intervalo"));

    NSecreto = Math.floor(Math.random() * fim);
}

function palpite(){
    const input = document.getElementById("input");
    palp = parseInt(input.value);
    //console.log(input.value);
    validaPalpite();
    buscaBinaria();
}

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