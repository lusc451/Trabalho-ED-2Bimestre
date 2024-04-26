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
    buscaBinaria(palp);
}

function buscaBinaria(value){
    tent--;
    let meio = Math.floor((ini + fim) /2);
    let section = document.getElementById("mensagemFinal");
    console.log(meio, NSecreto);

    if(value === NSecreto){
        section.innerHTML = "Parabéns! Você acertou o número secreto.  " + NSecreto;
        return;

    } else if(tent === 0){
        section.innerHTML = "Acabaram suas tentativas. O número secreto era: " + NSecreto;
        return;

    } else if(NSecreto > meio){
        
    }
}
