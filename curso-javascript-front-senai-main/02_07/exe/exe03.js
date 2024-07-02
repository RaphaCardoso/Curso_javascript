const animals = ["macaco", "tucano", "elefante", "pavão", "hipopótamo", "leão"];

let animal = "cachorro";

let existe = animals.includes(animal);

let mensagem = ""

if (existe) {
    mensagem = `${animal} não existe no array`;
    console.log(mensagem)
    console.log(!existe);
} else if (!existe) {
    mensagem = `${animal} existe no array`;
    console.log(mensagem)
    console.log(existe);
}

