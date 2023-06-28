let historico = document.getElementById("historico");
let expressao = "";

function calcular(tipo, valor) {
    console.log(tipo, valor);

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
            historico.innerHTML += "<p>" + expressao + " = " + valorDisplay + "</p>";
            expressao = valorDisplay;
        }

    } else {
        document.getElementById("tela").value += valor;
        expressao += valor;
    }
}