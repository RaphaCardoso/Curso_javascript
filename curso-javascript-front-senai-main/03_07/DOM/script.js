// DOM pode manipular tudo que há na página html

// chamando ID                     // alterando o que estava escrito no html
// document.getElementById("titulo").innerHTML = "Raphael";

/*const titulo = document.getElementById("titulo");
titulo.innerHTML = "Raphael de Barros"*/

// obtém o elemento do DOM com o ID 'idNome'
let nome = document.getElementById("idNome");
let cidade = document.getElementById("idCidade");

function mudar(event) {
    // previne um comportamento padrão do evento, como envio de um formulário
    event.preventDefault();

    document.getElementById("titulo").innerHTML = nome.value;
    nome.value = "";

    document.getElementById("cidade").innerHTML = cidade.value;
    cidade.value = ""
}

