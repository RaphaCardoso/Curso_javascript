const functions = [
    function () {
        return 'oi'
    },
    function () {
        return 'tarde'
    },
    function () {
        return 'boa'
    },
    function () {
        return 'bobão'
    },
    function () {
        return 'vida'
    },
    function () {
        return 'a'
    },
    function () {
        return 'vai'
    },
    function () {
        return 'como'
    },
    function () {
        return 'dia'
    },
    function () {
        return 'bem'
    },
    function () {
        return 'bom'
    },
    function () {
        return 'tudo'
    }
];

const mensagem = '';

for (let i = 0; i < functions.length; i++) {
    /*frase = `${functions[index]}`;
    console.log(frase);
    mensagem.concat(frase);
    index++;*/

    mensagem += `${functions[i]()} `;
}

console.log(mensagem);

