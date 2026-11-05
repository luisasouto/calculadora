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
        if (comecarDoZero) {
            visor.textContent = textoBotaoClicado;
        } else {
            visor.textContent = visor.textContent + textoBotaoClicado;
        }
        comecarDoZero = false;
    } else if (botaoClicado.classList.contains("ponto")) {
        console.log("ponto");
    } else if (botaoClicado.classList.contains("operador")) {
        console.log("operador");
    } else if (botaoClicado.classList.contains("limpar")) {
        console.log("limpar");
    } else if (botaoClicado.classList.contains("resultado")) {
        console.log("resultado");        
    }
});