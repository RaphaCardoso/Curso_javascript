console.log("Programa");

// Variáveis

let anoCopa = 1930;

// promt parecido com scanner
let anoLimite = prompt("Qual é o ano limite?");


// Criando uma função dentro de uma variável
const mostra = function (frase) {
    document.write(frase + "<br>")
}


while (anoCopa <= anoLimite) {
    mostra(anoCopa + " tem copa!")
    anoCopa = anoCopa + 4;
}



