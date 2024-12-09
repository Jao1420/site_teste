$(document).ready(function () {
    $(document).on('click', '#BOTAO', function (e) {
        // Usando Alertify.js
        alertify.error('Sem essa opção no momento :(');
    });
});




var textoDigitado =
    "Jovem desenvolvedor, iniciando meus trabalhos com JavaScript, HTML, PHP e banco de dados. Trabalhando na Visteon Amazonas, estilizando e criando os sites da mesma ";
var descricaoElemento = document.getElementById('descricaoDigitada');

function digitarTexto() {
    var textoTemporario = textoDigitado;
    var idx = 0;

    var intervalo = setInterval(function () {
        if (idx < textoTemporario.length) {
            descricaoElemento.textContent += textoTemporario.charAt(idx);
            idx++;
        } else {
            clearInterval(intervalo);
        }
    }, 25); // Velocidade da digitação 
}
///efeito de digitação
window.onload = function () {
    digitarTexto();
};

/// mensagem que apareçe ao passar o mouse no tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
