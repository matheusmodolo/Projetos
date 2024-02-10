let historico = document.getElementById("historico");
let expressao = "";

function teclado(event) {
    var tecla = event.key;

    switch (tecla) {
        case "0":
            calcular('valor', 0);
            break;
        case "1":
            calcular('valor', 1);
            break;
        case "2":
            calcular('valor', 2);
            break;
        case "3":
            calcular('valor', 3);
            break;
        case "4":
            calcular('valor', 4);
            break;
        case "5":
            calcular('valor', 5);
            break;
        case "6":
            calcular('valor', 6);
            break;
        case "7":
            calcular('valor', 7);
            break;
        case "8":
            calcular('valor', 8);
            break;
        case "9":
            calcular('valor', 9);
            break;
        case "+":
            calcular('acao', '+');
            break;
        case "-":
            calcular('acao', '-');
            break;
        case "*":
            calcular('acao', '*');
            break;
        case "/":
            calcular('acao', '/');
            break;
        case "Enter":
            calcular('acao', '=');
            break;
        case "=":
            calcular('acao', '=');
            break;
        case ".":
            calcular('acao', '.');
            break;
        case ",":
            calcular('acao', '.');
            break;
        case " ":
            calcular('acao', 'c');
            break;
        default:
            break;
    }
}

function calcular(tipo, valor) {

    if (tipo === "acao") {
        if (valor === "c") {
            document.getElementById("tela").value = "";
            expressao = "";
        }

        if (valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === ".") {
            document.getElementById("tela").value += valor;
            expressao += valor;
        }

        if (valor === "=") {
            var valorDisplay = eval(document.getElementById("tela").value);
            document.getElementById("tela").value = valorDisplay;
            // historico.innerHTML += "<p>" + expressao + " = " + valorDisplay + "</p>";
            

            var novaEntrada = document.createElement("p");
            novaEntrada.innerHTML = expressao + " = " + valorDisplay;
            historico.insertBefore(novaEntrada, historico.firstChild);

            //expressao = valorDisplay;
            expressao = document.getElementById("tela").value;
            document.getElementById("botaoLimpar").style.display = "block";
        }

    } else {
        document.getElementById("tela").value += valor;
        expressao += valor;
    }
}

function limparHistorico() {

    historico.innerHTML = "";

    if (historico.innerHTML === "") {
        document.getElementById("botaoLimpar").style.display = "none";
    }
}