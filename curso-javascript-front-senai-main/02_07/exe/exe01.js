
const drinkType = prompt("Escreva uma bebida:");

let mensagem = "";

switch (drinkType.toLowerCase()) {
    case "água":

        mensagem = "Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio."
        document.write(mensagem)
        console.log(mensagem);
        break;

    case "refrigerante":

        mensagem = "Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar."
        document.write(mensagem)

        console.log(mensagem)
        break;

    case "suco":

        mensagem = "Bebida produzida do líquido extraído de frutos.";
        document.write(mensagem)
        console.log(mensagem)
        break;

    default:
        mensagem = "Bebida desconhecida";
        document.write(mensagem)
        console.log("Bebida desconhecida");
        break;
}