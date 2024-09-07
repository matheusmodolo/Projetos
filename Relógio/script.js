/* Função para atualizar o relógio */
function atualizarRelogio() {
  var agora = new Date();
  var horas = agora.getHours();
  var minutos = agora.getMinutes();
  var segundos = agora.getSeconds();
  var milissegundos = agora.getMilliseconds();
  var dia = agora.getDate();
  var mes =
    agora.getMonth() + 1; /* (os meses começam do 0, então adicionamos 1) */
  var ano = agora.getFullYear();

  /* Adiciona um zero à esquerda se as horas, minutos ou segundos forem menores que 10 */
  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  /* Formata os milissegundos para sempre exibir três dígitos */
  milissegundos =
    milissegundos < 10
      ? "00" + milissegundos
      : milissegundos < 100
      ? "0" + milissegundos
      : milissegundos;

  var tempo = horas + ":" + minutos + ":" + segundos; /* Formata a hora */

  /* Array com os nomes dos meses em português */
  var nomesDosMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  var nomeDoMes = nomesDosMeses[mes - 1]; /* Obtém o nome do mês */

  var data = dia + " de " + nomeDoMes + " de " + ano; /* Formata a data */

  /* Atualiza os elementos na página com a hora, milissegundos e data formatados */
  document.getElementById("relogio").innerText = tempo;
  document.getElementById("milissegundos").innerText = milissegundos;
  document.getElementById("data").innerText = data;
}

/* Chama a função atualizarRelogio a cada 1 milissegundo */
setInterval(atualizarRelogio, 1);

/* Funções para alternar entre as abas */
function showTab(tabId) {
  var tabs = document.getElementsByClassName("tab");
  var buttons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
    buttons[i].classList.remove("active");
  }
  document.getElementById(tabId).classList.add("active");
  document
    .querySelector("[onclick=\"showTab('" + tabId + "')\"]")
    .classList.add("active");
}

/* Variáveis do cronômetro */
var cronometroInterval;
var startTime;
var elapsedTime = 0;

function startCronometro() {
  if (!cronometroInterval) {
    startTime = Date.now() - elapsedTime;
    cronometroInterval = setInterval(updateCronometro, 1);
  }
}

function stopCronometro() {
  clearInterval(cronometroInterval);
  cronometroInterval = null;
}

function resetCronometro() {
  stopCronometro();
  elapsedTime = 0;
  document.getElementById("cronometro").innerText = "00:00.000";
}

function updateCronometro() {
  elapsedTime = Date.now() - startTime;
  var horas = Math.floor(elapsedTime / (60 * 60 * 1000));
  var minutos = Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000));
  var segundos = Math.floor((elapsedTime % (60 * 1000)) / 1000);
  var milissegundos = elapsedTime % 1000;

  /* Adiciona um zero à esquerda se as horas, minutos ou segundos forem menores que 10 */
  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  /* Formata os milissegundos para sempre exibir três dígitos */
  milissegundos =
    milissegundos < 10
      ? "00" + milissegundos
      : milissegundos < 100
      ? "0" + milissegundos
      : milissegundos;

  var tempo = segundos + "." + milissegundos;

  if (minutos > 0) {
    tempo = minutos + ":" + tempo;
  }

  if (horas > 0) {
    tempo = horas + ":" + tempo;
  }

  document.getElementById("cronometro").innerText = tempo;
}
