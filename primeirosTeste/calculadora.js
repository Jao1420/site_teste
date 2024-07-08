///////declarando variáveis
// var nome, nota, endereco, nota2, resultado;

// ///dando valor à elas  
// nome = "jão"
// nota = 10
// endereco = "Rua j quadra 25"

// ///// alerta do nome cadastrado
// alert ("o nome cadastrado foi: " + nome );

// ///// fazendo um evento para o usuario escrever
// nota2= prompt("Digite a nota do jão");

// /////verificação simples de nota
// resultado = (parseInt(nota)+parseInt(nota2))/2 
//  alert ("A média foi: " + resultado);

//  if (resultado>7){
//     alert("Você passou!!");
//  }else{
//     alert("Reprovado, seu lixo")
//  };

function calcular() {
    var valor1 = document.getElementById("valor1").value;
    var operacao = document.getElementById("operacao").value;
    var valor2 = document.getElementById("valor2").value;
    var resultado;

    if (operacao == "+") {
        resultado = parseFloat(valor1) + parseFloat(valor2);
    } else if (operacao == "-") {
        resultado = parseFloat(valor1) - parseFloat(valor2);
    } else if (operacao == "*") {
        resultado = parseFloat(valor1) * parseFloat(valor2);
    } else if (operacao == "/") {
        resultado = parseFloat(valor1) / parseFloat(valor2);
    }

    // pelo " Documento" "pegue\ o elemento plelo id..."
    document.getElementById("resultado").innerText = "Resultado: " + resultado;

    // Limpa os campos valor1 e valor2
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
}

////innerText fica no html e subistitui pelo resultado
