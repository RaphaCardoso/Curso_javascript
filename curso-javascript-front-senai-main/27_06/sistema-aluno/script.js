const button = document.querySelector("button");
const inputNota = document.querySelector("#nota")

// criando função limpar campo

function clearForm() {
    // mudando o valor da caixa de texto
    inputNota.value = "";
}


//Criando uma função
button.addEventListener("click", function (event) {
    event.preventDefault();

    const inputNotaValue = inputNota.value
    console.log(inputNotaValue);

    // validação de formulário

    if (inputNotaValue === "") {
        alert("Campo Obrigatório")
        return false;
    }

    const tipo = parseInt(inputNotaValue) //typeof inputNotaValue;

    const validar = isNaN(tipo)
    console.log(validar);

    if (validar) {
        alert("Insira um número!");
        return false;
    }

    if (inputNotaValue <= 11 && inputNotaValue >= 0) {
        if (inputNotaValue >= 6) {
            alert("Você está Aprovado")
        } else if (inputNotaValue <= 5) {
            alert("Você está Reprovado")
        }
    } else {
        alert("nota inválida")
    }


    // chamando função limpar campo
    clearForm()

});