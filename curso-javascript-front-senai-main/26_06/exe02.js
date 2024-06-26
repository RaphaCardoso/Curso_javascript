const nomeAluno = "Caio";
const idadeAluno = 36;
const casado = true;
const times = ["Paulista", "Santos"];

console.log(typeof nomeAluno);
console.log(typeof idadeAluno);
console.log(typeof casado);
console.log(typeof times);

let txt = "  Estão chegando as provas";

console.log(txt.length);

// retorna a posição do que foi buscado
console.log(txt.indexOf("ã"));

// retorna a última posição do que foi buscado
console.log(txt.lastIndexOf("o"));

// cortar parte do texto  inicio e fim do corte
console.log(txt.slice(6, 15));

// ele ega o que eu não quero e troca para o que eu quero
console.log(txt.replace("as provas", "os vestibulares"));

console.log(txt.toLocaleUpperCase());
console.log(txt.toLocaleLowerCase());

// remove espaços em branco no início e final
console.log(txt.trim())

const winterMessage = "o inverno está chegando"

console.log(winterMessage.toUpperCase());

console.log(winterMessage.indexOf("v"));

console.log(winterMessage.lastIndexOf("n"));

