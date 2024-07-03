let mudarCor = document.getElementById('btnMudaCor');
let voltaCor = document.getElementById('btnVoltaCor');

mudarCor.addEventListener('click', function () {
    document.body.style.background = "rgb(255, 164, 232)";
    document.getElementById("texto").style.color = "white"
});

voltaCor.addEventListener('click', function () {
    document.body.style.background = ""
    document.getElementById("texto").style.color = ""

});

