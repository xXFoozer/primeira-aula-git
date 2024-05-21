var qg = prompt("digite a quantidade de gols");
var qc = prompt("digite a quantidade de passes certos");
var qe = prompt("digite a quantidade de passes errados");

var pontos = (qg * 50) + (qc * 10) + (qe * -5)

if (pontos < 50) {

   alert("PÉSSIMA PARTIDA");

} else if (pontos >= 50 && pontos < 100) {

    alert("RUIM");

} else if (pontos >= 100 && pontos < 150) {

    alert("BASICO");

} else if (pontos >= 150 && pontos < 200) {

    alert("FOI BEM");

} else if (pontos > 200) {

   alert("JOGOU DE MAIS");
}
