const tom = "Tom";

const firstTom = "Hanks";

const secondTom = "Cruise";

const thirdTom = "Holland";

const myFavoriteTom = "meu %s favorito é o %s %s"

console.log(myFavoriteTom, tom, tom, secondTom);

const programmingLanguage = 'JavaScript';
const js = programmingLanguage[0] + programmingLanguage[4];

console.log(js);

const names = ['João Grilo', 'Chicó', 'Rosinha'];
/*
const aqui = document.getElementById('aqui');

const meuUl = document.createElement('ul');
*/
for (let index = 0; index < names.length; index++) {
    const nome = names[index];
    const lista = `<li>${nome}</li>`

    //meuUl.innerText = lista
    console.log(lista);
}
/*
aqui.appendChild(meuUl)
console.log(meuUl);
*/
