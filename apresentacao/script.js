$(document).ready(function () {
    $(document).on('click', '#BOTAO', function (e) {
        alert('sem essa opção no momento :(');
        // Aqui você pode adicionar outras ações que deseja realizar
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
    }, 25); // Velocidade da digitação (em milissegundos)
}

window.onload = function () {
    digitarTexto();
};

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});