const functions = [
    function () {
        return ' oi'
    },
    function () {
        return ' tarde'
    },
    function () {
        return ' boa'
    },
    function () {
        return ' bobão'
    },
    function () {
        return ' vida'
    },
    function () {
        return ' a'
    },
    function () {
        return ' vai'
    },
    function () {
        return ' como'
    },
    function () {
        return ' dia'
    },
    function () {
        return ' bem'
    },
    function () {
        return ' bom'
    },
    function () {
        return ' tudo'
    }
]

const mensagem = "";

for (let index = 0; index < functions.length; index++) {
    frase = functions[index];
    console.log(frase);
    mensagem += frase;
    index++;
}

console.log(mensagem);

