const visor = document.querySelector(".visor");
const teclado = document.querySelector(".teclado");
let numeroAntes = '';
let operador = '';
let numeroDepois = '';
let comecarDoZero = true;
let igualRepetido = false;


teclado.addEventListener("click", function (event) {
    const botaoClicado = event.target;

    if (botaoClicado.classList.contains("numero")) {

        const textoBotaoClicado = botaoClicado.textContent;

        if (comecarDoZero || visor.textContent === "0") {
            visor.textContent = textoBotaoClicado;
        } else {
            visor.textContent = visor.textContent + textoBotaoClicado;
        }
        comecarDoZero = false;
        igualRepetido = false;

    } else if (botaoClicado.classList.contains("ponto")) {

        if (comecarDoZero) {
            visor.textContent = "0.";
            comecarDoZero = false;

        } else if (!visor.textContent.includes(".")) {
            visor.textContent = visor.textContent + ".";
        }

        igualRepetido = false;

    } else if (botaoClicado.classList.contains("operador")) {
        if (visor.textContent === "Indefinido") {
            return;
        }

        numeroAntes = visor.textContent;
        operador = botaoClicado.dataset.operador;
        comecarDoZero = true;
        igualRepetido = false;

    } else if (botaoClicado.classList.contains("resultado")) {
        if (operador === '' || visor.textContent === "Indefinido") {
            comecarDoZero = true;
            return;
        }

        if (igualRepetido) {
            numeroAntes = visor.textContent;
        } else {
            numeroDepois = visor.textContent;
        }

        const numeroAntesConvertido = Number(numeroAntes);
        const numeroDepoisConvertido = Number(numeroDepois);
        let resultadoCalculo;

        switch (operador) {
            case "+":
                resultadoCalculo = numeroAntesConvertido + numeroDepoisConvertido;
                break;
            case "-":
                resultadoCalculo = numeroAntesConvertido - numeroDepoisConvertido;
                break;
            case "*":
                resultadoCalculo = numeroAntesConvertido * numeroDepoisConvertido;
                break;
            case "/":
                if (numeroDepoisConvertido === 0) {
                    resultadoCalculo = "Indefinido";
                } else {
                    resultadoCalculo = numeroAntesConvertido / numeroDepoisConvertido;
                }
                break;
            default:
                break;
        }

        if (typeof resultadoCalculo === "number") {
            resultadoCalculo = Number(resultadoCalculo.toFixed(15));
        }

        visor.textContent = resultadoCalculo;
        comecarDoZero = true;
        igualRepetido = true;        

    } else if (botaoClicado.classList.contains("limpar")) {
        visor.textContent = "0";
        numeroAntes = '';
        operador = '';
        numeroDepois = '';
        comecarDoZero = true;
        igualRepetido = false;
    }
});