let ini = 0;
let fim = 0;
let palp = 0;
let NSecreto = 0;
let tent = 10;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('rangeForm').addEventListener('submit', defineIntervalo);

    // Adiciona ouvinte para a tecla Enter no campo de palpite
    document.getElementById('input').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Evita que o form seja submetido
            palpite(); // Chama a função de palpite diretamente
        }
    });
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


function validaPalpite() {
    if (palp == NSecreto) {
        endGame(true);  // Usuário ganhou o jogo
    } else {
        // Verifica se é a última tentativa antes de perder
        if (tent <= 1) {
            endGame(false);  // Usuário perdeu o jogo por falta de tentativas
        } else {
            tent--;  // Decrementa o número de tentativas restantes apenas aqui
            atualizaTent();  // Atualiza a visualização do número de tentativas
            // Fornece dicas se o palpite é maior ou menor que o número secreto
            const dica = palp > NSecreto ? "O número é maior que o número secreto." : "O número é menor que o número secreto";
            document.getElementById('feedback').textContent = dica;
        }
    }
}

function endGame(won) {
    let message = won ? `Parabéns! Você descobriu o número ${NSecreto}` : `Fim de jogo! As tentativas acabaram. O número secreto era ${NSecreto}.`;
    document.getElementById('endGameMessage').textContent = message;
    document.getElementById('palpiteForm').style.display = 'none';
    document.getElementById('rangeForm').style.display = 'none';
    document.getElementById('dicas-box').style.display = 'none';
    document.getElementById('feedback-box').style.display = 'none';
    document.getElementById('tentativas-box').style.display = 'none';
    document.getElementById('endGameBox').style.display = 'block'; // Mostra a caixa de fim de jogo
}

function atualizaTent() {
    document.getElementById('tentativasRestantes').textContent = 'Tentativas restantes: ' + tent;
}

function resetGame() {
    location.reload(); // Recarrega a página para reiniciar o jogo
}

function buscaBinaria(){
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