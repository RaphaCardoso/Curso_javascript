function nomeFuncao() {
    console.log("Esta é uma função!");
}

nomeFuncao();

function calc(arg1, arg2) {
    // Na função está a regra de negócio que irá funcionar independente do input
    return arg1 + arg2;
}

console.log(calc(4, 4));
console.log(calc(5, 10));