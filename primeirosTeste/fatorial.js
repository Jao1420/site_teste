/// reduce

numeros = [12,11,10,9,8,7,6,5,4,3,2]

function fatorial (total, i){
    return total * i
}

var multi = numeros.reduce(fatorial)

/// soma
const somaum = (total,i) => total+i

var somatorio = numeros.reduce(somaum)
/////

console.log (`O fatorial é ${multi}`)


console.log (somatorio)
/////////////////////////////

// calculando média

notas =[9.8, 8.5, 7.6, 10, 10]

const soma = (total,i) => total+i

//conta o n° de objetos na array NOTAS
var n = notas.length

var media =notas.reduce (soma)/n 

console.log (`A média de notas é ${media}`)


