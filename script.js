const visor = document.querySelector(".visor");
const teclado = document.querySelector(".teclado");
let numeroAntes = '';
let operador = '';
let numeroDepois = '';
let comecarDoZero = true;


teclado.addEventListener("click", function (event) {
    const botaoClicado = event.target;

    if (botaoClicado.classList.contains("numero")) {

        const textoBotaoClicado = botaoClicado.textContent;
        console.log(textoBotaoClicado);

        if (comecarDoZero || visor.textContent === "0") {
            visor.textContent = textoBotaoClicado;
        } else {
            visor.textContent = visor.textContent + textoBotaoClicado;
        }
        comecarDoZero = false;

    } else if (botaoClicado.classList.contains("ponto")) {

        if (comecarDoZero) {
            visor.textContent = "0.";
            comecarDoZero = false;
            
        } else if (!visor.textContent.includes(".")) {
            visor.textContent = visor.textContent + ".";
        }

    } else if (botaoClicado.classList.contains("operador")) {
        numeroAntes = visor.textContent;
        operador = botaoClicado.dataset.operador;
        comecarDoZero = true;
        console.log(numeroAntes, operador);

    } else if (botaoClicado.classList.contains("limpar")) {
        console.log("limpar");

    } else if (botaoClicado.classList.contains("resultado")) {
        console.log("resultado");
    }
});