const moverImagem = document.getElementById("btnMoverImagem");
let imagem = document.getElementById("imagem");

// var para rastrear o estado atual da posição da imagem
let isMoved = false;

moverImagem.addEventListener('click', function () {

    if (!isMoved) {

        isMoved = true;
        imagem.style.transition = "1.2s"
        imagem.style.transform = "rotate(50deg)"
        imagem.style.left = "250px"
        imagem.style.top = "250px"

    } else if (isMoved) {
        imagem.style.transition = "1.2s"
        imagem.style.transform = ""
        imagem.style.left = ""
        imagem.style.top = ""
        isMoved = false;
    }

})